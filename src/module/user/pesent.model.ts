import { Schema, model } from 'mongoose';
import { IPatient } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt'

const patientSchema = new Schema<IPatient>({
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
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  role: {
    type: String,
    default: 'patient',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


patientSchema.pre('save', async function (next) {
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
patientSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})


export const Patient = model<IPatient>('Patient', patientSchema);
