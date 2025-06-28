import { Availability } from "../doctorAvailability/availability.model";
import { Service } from "../doctorService/service.model";
import { Doctor } from "./doctor.model"


const getDoctoreDb = async () => {
  const result = await Doctor.find()
  return result
}

// const getSingleDoctoreIdDb = async (id: string) => {
//   const result = await Doctor.findById(id)
//   return result
// }

export const getSingleDoctoreIdDb = async (id: string) => {
  //  Doctor Info
  const doctor = await Doctor.findById(id).select(
    'name email phone specialization hospitalName hospitalFloor'
  ).lean();

  if (!doctor) {
    throw new Error('Doctor not found');
  }

  // Doctor's Services
  const services = await Service.find({ doctorId: id }).lean();

  // Doctor's Availability
  const availability = await Availability.find({ doctorId: id }).lean();

  return {
    doctor,
    services,
    availability,
  };
};


export const userService = {
  getDoctoreDb,
  getSingleDoctoreIdDb
}
