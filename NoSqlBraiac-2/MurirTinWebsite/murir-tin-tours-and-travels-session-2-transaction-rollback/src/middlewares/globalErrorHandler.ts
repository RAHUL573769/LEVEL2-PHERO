/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'

/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode || 500
  let message = err.message || 'Something went wrong'
  let status = err.status || 'error'

  // console.log(err.name)

  if (err && err instanceof mongoose.Error.ValidationError) {
    // console.log('Ami Validation ERROR')

    console.log(err)
    console.log(err)
    statusCode = 400
    message = err.message || 'Something went wrong'
    status = 'error'
  }
  res.status(statusCode).json({
    status,
    message,
    err,
  })
}

export default globalErrorHandler
