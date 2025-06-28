import { Doctor } from "./doctor.model"


const getDoctoreDb = async () => {
  const result = await Doctor.find()
  return result
}

const getSingleDoctoreIdDb = async (id: string) => {
  const result = await Doctor.findById(id)
  return result
}


export const userService = {
  getDoctoreDb,
  getSingleDoctoreIdDb
}
