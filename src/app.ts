import express, { Request, Response } from 'express'
import authRoute from './module/auth/auth.route'

const app = express()

// middleware
app.use(express.json())

// router
app.use('/auth', authRoute)


app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

export default app
