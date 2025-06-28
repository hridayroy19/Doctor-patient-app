/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import { AppointmentService } from './appointment.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';


const bookAppointment = catchAsync(async (req, res) => {
    const patientId = (req as any).user.id;
    const { doctorId, serviceId, selectedDate, timeSlot } = req.body;

    const appointment = await AppointmentService.createAppointment({
        doctorId,
        patientId,
        serviceId,
        selectedDate,
        timeSlot,
    });
    sendResponse(res, {
        status: true,
        statusCode: httpStatus.CREATED,
        message: 'Appointment booked successfully, waiting for doctor confirmation',
        data: appointment,
    })
})

export const AppointmentController = {
    bookAppointment
}