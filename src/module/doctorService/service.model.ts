import { Schema, model } from 'mongoose'
import { IService } from './service.interface'

const serviceSchema = new Schema<IService>({
  title: { type: String, required: true },
  description: String,
  price: Number,
  duration: Number,
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
})

export const Service = model<IService>('Service', serviceSchema)
