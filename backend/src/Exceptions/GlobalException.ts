import HandlerExeption from './HandlerException.ts'

const handelCastErrorDB = (err) => {
  const message = `invalid ${err.path}: ${err.value}.`
  return new HandlerExeption(message, 400)
}

const handelValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map(
    (el: { message: string }) => el.message
  )
  const message = `invalid input data. ${errors.join('. ')}`
  return new HandlerExeption(message, 400)
}

const handelJWTError = () => {
  const message = `invalid token please login again!`
  return new HandlerExeption(message, 401)
}

const handelJWTExpiredError = () => {
  const message = `your token has expired! please login again!`
  return new HandlerExeption(message, 401)
}

const handelDuplicateFieldsErrorDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]
  const message = `Duplicate field value : ${value}. please use another value!`
  return new HandlerExeption(message, 400)
}

const sendErrorForDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  })
}

const sendErrorForProd = (err, res) => {
  // Operational
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    })
    // programing unknown erro :dont leak error details
  } else {
    // 1- log error
    console.error('Error 👌', {
      status: err.status,
      statusCode: err.statusCode,
    })
    // 2- send generic error
    res.status(500).json({
      status: 'error',
      message: 'something went really wrong!',
    })
  }
}

export default (err, _req, res) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  if (process.env.NODE_ENV === 'development') {
    sendErrorForDev(err, res)
  } else if (process.env.NODE_ENV === 'production') {
    if (err.name === 'CastError') err = handelCastErrorDB(err)
    if (err.code === 11000) err = handelDuplicateFieldsErrorDB(err)
    if (err.name === 'ValidationError') err = handelValidationErrorDB(err)
    if (err.name === 'JsonWebTokenError') err = handelJWTError()
    if (err.name === 'TokenExpiredError') err = handelJWTExpiredError()

    sendErrorForProd(err, res)
  }
}
