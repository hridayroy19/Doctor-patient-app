import express, { Request, Response } from 'express'
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

export default app
