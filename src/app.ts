import 'express-async-errors'
import cors from 'cors'
import express from 'express'
import { router } from './routes/routes'
import { errorMiddleware } from './middlewares/errorMiddleware'

const app = express()
app.use(express.json())
app.use(cors({credentials: true}))
app.use(router)
app.use(errorMiddleware)

export { app }