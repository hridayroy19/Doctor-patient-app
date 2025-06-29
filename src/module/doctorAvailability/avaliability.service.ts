import { IAvailability } from './availability.interface'
import { Availability } from './availability.model'

const avalibilityDoctorDb = async (
  payload: IAvailability
): Promise<IAvailability> => {
  const result = await Availability.create(payload)
  return result
}

export const AvaliablilityService = {
  avalibilityDoctorDb,
}
