/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination } from '../../builder/paginationHelpers'
import { Appointment } from './appointment.model'

// create appointment
const createAppointment = async (payload: {
  doctorId: string
  patientId: string
  serviceId: string
  selectedDate: string
  timeSlot: string
}) => {
  // check if slot is already booked (pending or accepted)
  const isSlotBooked = await Appointment.findOne({
    doctorId: payload.doctorId,
    serviceId: payload.serviceId,
    selectedDate: payload.selectedDate,
    timeSlot: payload.timeSlot,
    status: { $in: ['pending', 'accepted'] },
  })

  if (isSlotBooked) {
    throw new Error('This time slot is already booked')
  }

  const appointment = await Appointment.create({
    ...payload,
    status: 'pending',
  })

  return appointment
}

//get appointments
const getPatientAppointments = async (patientId: string) => {
  const appointments = await Appointment.find({ patientId })
    .populate('doctorId', 'name specialization hospitalName hospitalFloor')
    .populate('serviceId', 'title description price duration')
    .lean()

  return appointments
}

// update status doctore
const updateAppointmentStatusDb = async (
  doctorId: string,
  appointmentId: string,
  status: 'accepted' | 'cancelled' | 'completed'
) => {
  const appointment = await Appointment.findOne({
    _id: appointmentId,
    doctorId: doctorId,
  })

  if (!appointment) {
    throw new Error('Appointment not found')
  }

  // Update status
  appointment.status = status
  await appointment.save()

  return appointment
}

// View all appointment requests:

const getAppointmentsByDoctorStatus = async (
  doctorId: string,
  status?: string
) => {
  const filter: any = { doctorId }
  if (status) {
    filter.status = status
  }
  //  console.log('Filter:', filter);

  const appointments = await Appointment.find(filter)
    .populate('patientId', 'name email phone age gender')
    .populate('serviceId', 'title price duration')
    .lean()
  // console.log(appointments,"main data")

  return appointments
}

const getPaginatedAppointments = async (query: any) => {
  const { page, limit, skip } = Pagination(query)

  const total = await Appointment.countDocuments()

  const appointments = await Appointment.find()
    .populate('doctorId', 'name email specialization')
    .populate('patientId', 'name email age')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean()

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: appointments,
  }
}

export const AppointmentService = {
  createAppointment,
  getPatientAppointments,
  updateAppointmentStatusDb,
  getAppointmentsByDoctorStatus,
  getPaginatedAppointments,
}
