import { Schema, model } from 'mongoose';
import { IAvailability } from './availability.interface';

const availabilitySchema = new Schema<IAvailability>({
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  day: { type: String, required: true },
  slots: [{ type: String, required: true }],
});

export const Availability = model<IAvailability>('Availability', availabilitySchema);
