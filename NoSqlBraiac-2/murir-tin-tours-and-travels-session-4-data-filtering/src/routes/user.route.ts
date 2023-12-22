/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import express, { Request, Response } from 'express'
import { userController } from '../controllers/user.controller'
import User from '../models/user.model'
import catchAsyncFunction from '../utils/catchAsync'
import { NextFunction } from 'express'
import { USER_ROLE } from '../constants/users.constants'
// import { checkAuth } from '../middlewares/auth'
// import { checkAuth } from '../middlewares/auth'
const checkAuth = (...roles: Array<keyof typeof USER_ROLE>) => {
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
      if (roles.includes(user.role)) {
        throw new Error('You are not Authorizes Password')
      }
      next()
    },
  )
}

const router = express.Router()
router.post(
  '/create-user',
  checkAuth(USER_ROLE.admin, USER_ROLE.user),
  userController.createUser,
)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getSingleUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
