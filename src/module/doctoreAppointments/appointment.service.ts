import { Appointment } from './appointment.model';

const createAppointment = async (payload: {
  doctorId: string;
  patientId: string; serviceId: string; selectedDate: string;timeSlot: string;
}) => {
  // check if slot is already booked (pending or accepted)
  const isSlotBooked = await Appointment.findOne({
    doctorId: payload.doctorId,
    serviceId: payload.serviceId,
    selectedDate: payload.selectedDate,
    timeSlot: payload.timeSlot,
    status: { $in: ['pending', 'accepted'] },
  });

  if (isSlotBooked) {
    throw new Error('This time slot is already booked');
  }

  const appointment = await Appointment.create({
    ...payload,
    status: 'pending',
  });

  return appointment;
};

export const AppointmentService = {
  createAppointment,
};
