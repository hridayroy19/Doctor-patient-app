import httpStatus  from 'http-status';
import express, { NextFunction, Request, Response } from 'express'
import authRoute from './module/auth/auth.route'
import Doctorouter from './module/doctorService/service.route'
import availabilityrouter from './module/doctorAvailability/availability.route'

const app = express()

// middleware
app.use(express.json())

// router
app.use('/auth', authRoute)

// doctore route
app.use('/doctor', Doctorouter)
app.use('/doctor',availabilityrouter)


app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})


app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .json({ success: false, message: err.message, error: err });
});

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    message: 'Route not found',
  })
})

export default app
