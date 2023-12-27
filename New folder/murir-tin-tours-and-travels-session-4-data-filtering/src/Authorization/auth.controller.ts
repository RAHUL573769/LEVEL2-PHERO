/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import { authServices } from './auth.service'
// import catchAsyncFunction from '../utils/catchAsync'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// const login = catchAsyncFunction(
//   async (req: Request, res: Response, next: NextFunction) => {},
// )
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const register = async (req: Request, res: Response, next: NextFunction) => {
  const result = await authServices.register(req.body)
  res.status(200).json({
    message: 'User Registered Succesfully',
    data: result,
  })
}

export const authController = {
  register,
}
