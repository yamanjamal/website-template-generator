import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import HandlerExeption from './Exceptions/HandlerException.ts'
import globalException from './Exceptions/GlobalException.ts'
import sectionRouter from './routes/sectionRouter.ts'
import websiteRouter from './routes/websiteRouter.ts'
import mongoose from 'mongoose'
import Logging from './library/logging.ts'

dotenv.config({ path: './.env' })

const app = express()

//1-Middlewares
app.use(express.json())
app.use(cors())
app.use(express.static(`./public`))

//2-routes
app.use('/api/v1/sections', sectionRouter)
app.use('/api/v1/website', websiteRouter)
app.all('*', (req, _res, next) => {
  next(new HandlerExeption(`cant find ${req.originalUrl} on the server`, 404))
})

//3-Haneling errors
app.use(globalException)

//3-Connecting to DB
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => Logging.log('db connected successfully'))

const port = 5000
const server = app.listen(port, () =>
  Logging.log(`Server listening on port ${port}`)
)

process.on('unhandledRejection', (err: { name: string; message: string }) => {
  Logging.log('UNHANDLED REJECTION! ☢️  Shutting down...')
  Logging.log(`${err.name}  ${err.message}`)
  server.close(() => {
    process.exit(1)
  })
})
