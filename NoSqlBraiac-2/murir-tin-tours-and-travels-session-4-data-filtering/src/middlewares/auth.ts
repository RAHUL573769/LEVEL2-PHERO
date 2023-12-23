import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
import { USER_ROLE } from '../constants/users.constants'
import User from '../models/user.model'

export const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
  console.log('Roles in Check Route', roles)
  return catchAsyncFunction(
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

      const checkAuthorization = roles.includes(user.role)
      if (!checkAuthorization) {
        throw new Error('You are not Authorizes Password')
      }
      next()
    },
  )
}
