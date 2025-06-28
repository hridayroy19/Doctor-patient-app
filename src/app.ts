import express, { Request, Response } from 'express'
import userRouter from './module/user/user.router'

const app = express()

// middleware
app.use(express.json())

// router
app.use('/auth', userRouter)


app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

export default app
