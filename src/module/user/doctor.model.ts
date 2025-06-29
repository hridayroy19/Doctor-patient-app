import { Schema, model } from 'mongoose'
import { IDoctor } from './user.interface'
import config from '../../config'
import bcrypt from 'bcrypt'

const doctorSchema = new Schema<IDoctor>({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  hospitalFloor: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'doctor',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

doctorSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  )
  next()
})
// set '' after saving password
doctorSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

export const Doctor = model<IDoctor>('Doctor', doctorSchema)
