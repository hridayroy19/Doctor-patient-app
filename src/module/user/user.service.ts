/* eslint-disable @typescript-eslint/no-explicit-any */
import { Availability } from '../doctorAvailability/availability.model'
import { Service } from '../doctorService/service.model'
import { Doctor } from './doctor.model'

const getDoctoreDb = async (filters: any) => {
  const { hospitalName, specialization, service } = filters

  const doctorFilter: any = {}

  // Filter by hospital name
  if (hospitalName) {
    doctorFilter.hospitalName = { $regex: hospitalName, $options: 'i' }
  }

  // Filter by specialization
  if (specialization) {
    doctorFilter.specialization = { $regex: specialization, $options: 'i' }
  }

  let doctors = await Doctor.find(doctorFilter).lean()
  if (service) {
    const serviceMatched = await Service.find({
      title: { $regex: service, $options: 'i' },
    }).select('doctorId')

    const doctorIds = serviceMatched.map((item) => item.doctorId?.toString())

    doctors = doctors.filter((doc) => doctorIds.includes(doc._id.toString()))
  }

  return doctors
}

// const getSingleDoctoreIdDb = async (id: string) => {
//   const result = await Doctor.findById(id)
//   return result
// }

export const getSingleDoctoreIdDb = async (id: string) => {
  //  Doctor Info
  const doctor = await Doctor.findById(id)
    .select('name email phone specialization hospitalName hospitalFloor')
    .lean()

  if (!doctor) {
    throw new Error('Doctor not found')
  }

  // Doctor's Services
  const services = await Service.find({ doctorId: id }).lean()

  // Doctor's Availability
  const availability = await Availability.find({ doctorId: id }).lean()

  return {
    doctor,
    services,
    availability,
  }
}

export const userService = {
  getDoctoreDb,
  getSingleDoctoreIdDb,
}
