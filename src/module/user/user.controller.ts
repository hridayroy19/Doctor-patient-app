import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { userService } from "./user.service"


const getAllDoctore = catchAsync(async (req, res) => {
   const filters = req.query;
  const result = await userService.getDoctoreDb(filters)
  sendResponse(res, {
    status: true,
    statusCode: httpStatus.CREATED,
    message: 'Doctore getting successfully',
    data: result,
  })
})

// id by get doctoere
const getDoctore = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await userService.getSingleDoctoreIdDb(id)
  sendResponse(res, {
    status: true,
    statusCode: httpStatus.CREATED,
    message: 'single Doctore getting ',
    data: result,
  })
})


export const userController = {
  getAllDoctore,
  getDoctore
}
