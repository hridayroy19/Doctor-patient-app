import { Schema, model } from 'mongoose';
import { IDoctor } from './user.interface';

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
});

export const Doctor = model<IDoctor>('Doctor', doctorSchema);
