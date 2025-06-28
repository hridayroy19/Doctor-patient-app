
import { Request, Response } from 'express'
import { userService } from './user.service'

const createDoctor = async (req: Request, res: Response) => {
  try {
    const payload = req.body

    const result = await userService.createDoctorDB(payload)

    res.json({
      status: true,
      message: 'User Register successfully',
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
  }
}

const createPatient = async (req: Request, res: Response) => {
  try {
    const payload = req.body

    const result = await userService.createPesentDB(payload)

    res.json({
      status: true,
      message: 'User Register successfully',
      data: result,
    })
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    })
  }
}

// const getUser = async (req: Request, res: Response) => {
//   try {
//     const result = await userService.getUser()

//     res.send({
//       status: true,
//       message: 'Users getting successfully',
//       result,
//     })
//   } catch (error) {
//     res.json({
//       status: false,
//       message: 'Something went wrong',
//       error,
//     })
//   }
// }



export const userController = {
  createDoctor,
  createPatient,
  // getUser,
}
