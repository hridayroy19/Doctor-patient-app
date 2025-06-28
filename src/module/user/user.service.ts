import { Doctor } from "./doctor.model"


const getDoctoreDb = async () => {
  const result = await Doctor.find()
  return result
}


export const userService = {
  getDoctoreDb
}
