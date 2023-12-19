/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import e, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { TError } from '../typers/TError'
import status from 'http-status'
import httpStatus from 'http-status'

/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // let statusCode = err.statusCode || 500
  // let message = err.message || 'Something went wrong'
  // let status = err.status || 'error'
  const errorResponse: TError = {
    message: err.message || 'Something went wrong',
    err: err,
    statusCose: httpStatus.NOT_FOUND,
    status: 'There is a Error .Please rectify',
    issues: err.issues || [],
  }

  // console.log(err.name)

  if (err && err instanceof mongoose.Error.ValidationError) {
    // console.log('Ami Validation ERROR')
    errorResponse.statusCose = 400
    errorResponse.message = err.message
    errorResponse.status = 'There is a Error .Please rectify'
    // console.log(errorResponse)

    const errorValues = Object.values(err.errors)
    errorValues.forEach(
      (errObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        errorResponse.issues.push({
          path: errObj.path,
          message: errObj.message,
        })
      },
    )
  }
  res.status(errorResponse.statusCose).json({
    status: errorResponse.status,
    message: errorResponse.message,
    issues: errorResponse.issues,
  })
}

export default globalErrorHandler
