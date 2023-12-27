import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
// import User from '../models/user.model'
import { USER_ROLE } from '../constants/user.constants'
import jwt from 'jsonwebtoken'

export const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
  //   console.log(roles)
  return catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      console.log(roles)
      //   console.log(req.headers.authorization)

      const token = req.headers.authorization

      if (!token) {
        throw new Error('Invalid Token')
      }
      const decodedToken = jwt.verify(token, 'tour-secret')

      console.log(decodedToken)

      //   const email = req.body.email
      //   const password = req.body.password
      //   const user = await User.findOne({ email, password })

      //   if (!user) {
      //     throw new Error('Invalid User')
      //   }
      //   //   if (result?.role !== 'admin') {
      //   //     throw new Error('Invalid User Privilages')
      //   //   }
      //   if (!roles.includes(user?.role)) {
      //     throw new Error('Invalid User Privilages')
      //   }
      next()
    },
  )
}
