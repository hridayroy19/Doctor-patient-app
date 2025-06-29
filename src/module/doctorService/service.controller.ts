/* eslint-disable @typescript-eslint/no-explicit-any */
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'
import httpStatus from 'http-status'
import { DoctroService } from './service.service'

const addService = catchAsync(async (req, res) => {
  const doctorId = (req as any).user.id

  const payload = {
    ...req.body,
    doctorId,
  }

  const service = await DoctroService.serviceDoctorDb(payload)

  sendResponse(res, {
    status: true,
    statusCode: httpStatus.CREATED,
    message: 'Service added successfully',
    data: service,
  })
})

const updateService = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await DoctroService.updateServiceDb(id, req.body)

  sendResponse(res, {
    status: true,
    statusCode: httpStatus.OK,
    message: 'Service updated successfully',
    data: result,
  })
})

const deleteService = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await DoctroService.deleteSeriviceDb(id)

  sendResponse(res, {
    status: true,
    statusCode: httpStatus.OK,
    message: 'Service deleted successfully',
    data: result,
  })
})

export const ServiceDoctor = {
  addService,
  updateService,
  deleteService,
}
