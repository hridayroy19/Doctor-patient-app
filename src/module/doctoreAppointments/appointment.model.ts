import { Schema, model } from 'mongoose';
import { IAppointment } from './appointment.interface';

const appointmentSchema = new Schema<IAppointment>({
    patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    selectedDate: { type: String, required: true },
    timeSlot: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'cancelled', 'completed'],
        default: 'pending',
    },
});

export const Appointment = model<IAppointment>('Appointment', appointmentSchema);
