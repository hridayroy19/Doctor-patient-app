/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status'
import { AppointmentService } from './appointment.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

const bookAppointment = catchAsync(async (req, res) => {
  const patientId = (req as any).user.id
  const { doctorId, serviceId, selectedDate, timeSlot } = req.body

  const appointment = await AppointmentService.createAppointment({
    doctorId,
    patientId,
    serviceId,
    selectedDate,
    timeSlot,
  })
  sendResponse(res, {
    status: true,
    statusCode: httpStatus.CREATED,
    message: 'Appointment booked successfully, waiting for doctor confirmation',
    data: appointment,
  })
})

const getPatientAppointments = catchAsync(async (req, res) => {
  const patientId = (req as any).user.id

  const appointments =
    await AppointmentService.getPatientAppointments(patientId)
  sendResponse(res, {
    status: true,
    statusCode: httpStatus.CREATED,
    message: 'appointments',
    data: appointments,
  })
})

const appointmentStatusUpdate = catchAsync(async (req, res) => {
  const doctorId = (req as any).user.id
  const appointmentId = req.params.id
  const { status } = req.body
  if (!['accepted', 'cancelled', 'completed'].includes(status)) {
    res.status(400).json({
      success: false,
      message: 'Invalid status',
    })
  }

  const updatedAppointment = await AppointmentService.updateAppointmentStatusDb(
    doctorId,
    appointmentId,
    status
  )
  sendResponse(res, {
    status: true,
    statusCode: httpStatus.CREATED,
    message: 'Appointment status updated',
    data: updatedAppointment,
  })
})

// apoinment status pending
const getDoctorAppointments = catchAsync(async (req, res) => {
  const doctorId = (req as any).user.id
  const { status } = req.query
  //   console.log(status,doctorId, "staussss")

  const appointments = await AppointmentService.getAppointmentsByDoctorStatus(
    doctorId,
    status as string
  )

  //   console.log(appointments,'rsult')

  sendResponse(res, {
    status: true,
    statusCode: httpStatus.OK,
    message: 'Doctor appointments fetched successfully',
    data: appointments,
  })
})

const appointmentsPaginaton = catchAsync(async (req, res) => {
  const result = await AppointmentService.getPaginatedAppointments(req.query)

  sendResponse(res, {
    status: true,
    statusCode: httpStatus.OK,
    message: 'Appointments fetched with pagination successfully',
    data: result.data,
    meta: result.meta,
  })
})

export const AppointmentController = {
  bookAppointment,
  getPatientAppointments,
  appointmentStatusUpdate,
  getDoctorAppointments,
  appointmentsPaginaton,
}
