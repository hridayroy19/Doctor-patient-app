import { Schema, model } from 'mongoose';
import { IPatient } from './user.interface';

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

export const Patient = model<IPatient>('Patient', patientSchema);
