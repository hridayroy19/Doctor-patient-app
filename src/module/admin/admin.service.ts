import { Appointment } from '../doctoreAppointments/appointment.model'
import { Doctor } from '../user/doctor.model'
import { Patient } from '../user/pesent.model'

const getDashboardStatsDb = async () => {
  const totalDoctors = await Doctor.countDocuments()
  const totalPatients = await Patient.countDocuments()
  const totalAppointments = await Appointment.countDocuments()

  return {
    totalDoctors,
    totalPatients,
    totalAppointments,
  }
}

export const AdminService = {
  getDashboardStatsDb,
}
