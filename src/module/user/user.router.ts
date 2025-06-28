import { Router } from 'express'
import { userController } from './user.controller'

const userRouter = Router()


userRouter.get('/doctors', userController.getAllDoctore)

export default userRouter
