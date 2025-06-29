import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'
import { AuthServer } from './auth.service'

const createDoctor = catchAsync(async (req, res) => {
  const result = await AuthServer.createDoctorDB(req.body)

  sendResponse(res, {
    status: true,
    statusCode: httpStatus.CREATED,
    message: 'Register is successfully',
    data: result,
  })
})

const createPatient = catchAsync(async (req, res) => {
  const result = await AuthServer.createPesentDB(req.body)

  sendResponse(res, {
    status: true,
    statusCode: httpStatus.CREATED,
    message: 'Register is successfully',
    data: result,
  })
})

const login = catchAsync(async (req, res) => {
  const result = await AuthServer.loginIntoDb(req.body)

  sendResponse(res, {
    status: true,
    statusCode: httpStatus.ACCEPTED,
    token: result.token,
    message: 'Login is successfully',
    data: result.veryfiUser,
  })
})

export const AuthController = {
  createDoctor,
  createPatient,
  login,
}
