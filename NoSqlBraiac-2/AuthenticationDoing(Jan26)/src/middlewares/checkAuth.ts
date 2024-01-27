/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
import User from '../models/user.model'
import { USER_STATUS } from '../constants/user.constants'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const checkAuth = (...roles: Array<keyof typeof USER_STATUS>) => {
  return catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      const email = req.body.email
      const password = req.body.password
      const user = await User.findOne({ email, password })

      if (!user) {
        throw new Error('Invalid Email')
      }
      if (!roles.includes(user?.role)) {
        throw new Error('You Are Not authorized')
      }
      next()
    },
  )
}
