import { Router } from 'express'
import { userController } from './user.controller'

const userRouter = Router()

userRouter.post('/register-doctor', userController.createDoctor)
userRouter.post('/register-patient', userController.createPatient)
// userRouter.get('/', userController.getUser)

export default userRouter
