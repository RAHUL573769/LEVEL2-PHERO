import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
import User from '../models/user.model'

export const checkAuth = catchAsyncFunction(
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    console.log(email, password, name)

    const user = await User.findOne({ email, password })
    console.log(user)
    if (!user) {
      throw new Error('Invalid Email and Password')
    }
    if (user?.role != 'admin') {
      throw new Error('You are not Authorizes Password')
    }
    next()
  },
)
