import { IService, IServiceUpdate } from './service.interface'
import { Service } from './service.model'

const serviceDoctorDb = async (payload: IService): Promise<IService> => {
  const result = await Service.create(payload)
  return result
}

// Update
const updateServiceDb = async (id: string, data: Partial<IServiceUpdate>) => {
  const result = await Service.findByIdAndUpdate(id, data, { new: true })
  return result
}

// Delete
const deleteSeriviceDb = async (id: string) => {
  const result = await Service.findByIdAndDelete(id)
  return result
}

export const DoctroService = {
  serviceDoctorDb,
  updateServiceDb,
  deleteSeriviceDb,
}
