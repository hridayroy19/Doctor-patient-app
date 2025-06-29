import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Doctor } from '../user/doctor.model'
import { IDoctor, IPatient } from '../user/user.interface'
import { Patient } from '../user/pesent.model'

const createDoctorDB = async (payload: IDoctor): Promise<IDoctor> => {
  const result = await Doctor.create(payload)

  return result
}

const createPesentDB = async (payload: IPatient): Promise<IPatient> => {
  const result = await Patient.create(payload)

  return result
}

const loginIntoDb = async (payload: { email: string; password: string }) => {
  // console.log(payload);
  let user = await Doctor.findOne({ email: payload?.email }).select('+password')

  if (!user) {
    user = await Patient.findOne({ email: payload?.email }).select('+password')
  }

  if (!user) {
    throw new Error('user is not found')
  }

  const userSatatus = user?.userStatus

  if (userSatatus === 'inactive') {
    throw new Error('user is Inactive')
  }

  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password
  )
  if (!isPasswordMatched) {
    throw new Error('Wrong password !! Try again')
  }

  //create token and sent to the  client
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
    id: user.id,
  }

  const token = jwt.sign(jwtPayload, 'secrect', { expiresIn: '5d' })
  const veryfiUser = {
    neme: user?.name,
    email: user?.email,
    role: user?.role,
    id: user?.id,
  }

  return { token, veryfiUser }
}

export const AuthServer = {
  createDoctorDB,
  createPesentDB,
  loginIntoDb,
}
