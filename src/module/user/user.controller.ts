import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { userService } from "./user.service"


const getAllDoctore = catchAsync(async (req, res) => {
  const result = await userService.getDoctoreDb()
  sendResponse(res, {
    status: true,
    statusCode: httpStatus.CREATED,
    message: 'Doctore getting successfully',
    data: result,
  })
})


export const userController = {
  getAllDoctore
}
