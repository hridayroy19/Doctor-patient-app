import { Doctor } from './doctor.model'
import { Patient } from './pesent.model'
import { IDoctor, IPatient } from './user.interface'

const createDoctorDB = async (payload: IDoctor): Promise<IDoctor> => {
  const result = await Doctor.create(payload)

  return result
}

const createPesentDB = async (payload: IPatient): Promise<IPatient> => {
  const result = await Patient.create(payload)

  return result
}

// const getUser = async () => {
//   const result = await User.find()
//   return result
// }


export const userService = {
  createDoctorDB,
  createPesentDB,
  // getUser,
}
