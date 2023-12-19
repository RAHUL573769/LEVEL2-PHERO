/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */

import e, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { TError } from '../typers/TError'
import status from 'http-status'
import httpStatus from 'http-status'
import { handleValidationError } from '../errorHandlers/handleValidationError'
import { handleDuplicateError } from '../errorHandlers/handleDuplicateErroe'
import { handleCastError } from '../errorHandlers/handleCateErro'

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
  let errorResponse: TError = {
    message: err.message || 'Something went wrong',
    err: err,
    statusCose: httpStatus.NOT_FOUND,
    status: 'There is a Error .Please rectify',
    issues: err.issues || [],
  }

  // console.log(err.name)

  if (err && err instanceof mongoose.Error.ValidationError) {
    errorResponse = handleValidationError(err)
    console.log(errorResponse)
    // console.log('Ami Validation ERROR')
    // errorResponse.statusCose = 400
    // errorResponse.message = 'Validation Error'
    // errorResponse.status = 'There is a Error .Please rectify'
    // console.log(errorResponse)

    // const errorValues = Object.values(err.errors)
    // errorValues.forEach(
    //   (errObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
    //     errorResponse.issues.push({
    //       path: errObj.path,
    //       message: errObj.message,
    //     })
    //   },
    // )
  } else if (err.code && err.code === 11000) {
    errorResponse = handleDuplicateError(err)
  } else if (err instanceof mongoose.Error.CastError) {
    errorResponse = handleCastError(err)
    // errorResponse.message = 'Invalid ObjectId'
    // errorResponse.statusCose = 404
    // errorResponse.err = ''
    // errorResponse.status = 'Failed'
    // errorResponse.issues = [
    //   {
    //     path: err.path,
    //     message: err.message,
    //   },
    // ]
  }
  res.status(errorResponse.statusCose).json({
    status: errorResponse.status,
    message: errorResponse.message,
    issues: errorResponse.issues,
  })
}

export default globalErrorHandler
