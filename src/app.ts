import express, { Request, Response } from 'express'
import authRoute from './module/auth/auth.route'
import Doctorouter from './module/doctorService/service.route'
import availabilityrouter from './module/doctorAvailability/availability.route'
import userRouter from './module/user/user.router'
import appointmentrouter from './module/doctoreAppointments/appointment.route'
import { globalErrorHandler } from './middlewares/globalErrorHandler'

const app = express()

// middleware
app.use(express.json())

// router
app.use('/', userRouter)
app.use('/auth', authRoute)

// doctore route
app.use('/doctor', Doctorouter)
app.use('/doctor', availabilityrouter)
app.use('/', appointmentrouter)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

app.use(globalErrorHandler)

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found',
  })
})

export default app
