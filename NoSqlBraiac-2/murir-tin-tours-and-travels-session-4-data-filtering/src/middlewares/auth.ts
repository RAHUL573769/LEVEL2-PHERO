import { NextFunction, Request, Response } from 'express'
import catchAsyncFunction from '../utils/catchAsync'
import User from '../models/user.model'

export const checkAuth = (roles: string[]) => {
  return catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      console.log(roles)
      const email = req.body.email

      //   console.log(req.body)
      const user = await User.findOne({ email })
      // console.log(user?.role)
      if (!user) {
        throw new Error('User Not FOUND')
      }
      if (roles.includes(user?.role)) {
        // next(new Error('Invalid User.You Caanot change data'))

        throw new Error('Invalid User ..You Caanot ')
      }
      next()
    },
  )
}
