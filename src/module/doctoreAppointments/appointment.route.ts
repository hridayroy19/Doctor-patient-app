import express from 'express';
import auth from '../../middlewares/auth';
import { AppointmentController } from './appointment.controller';

const appointmentrouter = express.Router();

// Patient must be logged in to book
appointmentrouter.post('/appointments', auth('patient'), AppointmentController.bookAppointment);
appointmentrouter.get('/patient/appointments', auth('patient'), AppointmentController.getPatientAppointments);

appointmentrouter.patch('/doctor/appointments/:id/status',auth('doctor'),AppointmentController.appointmentStatusUpdate);


export default appointmentrouter;
