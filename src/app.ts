import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

//cors
app.use(cors())

//dotenv
dotenv.config()

//parse data

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//api-endpoints
app.use('/api/v1/users/', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Application is running')
})

export default app
