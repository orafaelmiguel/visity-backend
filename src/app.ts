import 'express-async-errors'
import express from 'express'
import { router } from './routes/routes'
import { errorMiddleware } from './middlewares/errorMiddleware'

const app = express()

app.use(express.json())
app.use(router)
app.use(errorMiddleware)

export { app }