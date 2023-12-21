/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import { userController } from '../controllers/user.controller'
import User from '../models/user.model'
import catchAsyncFunction from '../utils/catchAsync'

const router = express.Router()

router.post(
  '/create-user',
  catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      const email = req.body.email
      const password = req.body.password
      console.log(req.body)
      const user = await User.findOne({ email })
      console.log(user)
      if (!user) {
        throw new Error('Invalid Email')
      }
      if (user?.role !== 'admin') {
        throw new Error('Invalid User.You Caanot change data')
      }
    },
  ),
  userController.createUser,
)
router.get(
  '/',
  //   catchAsyncFunction(
  //     async (req: Request, res: Response, next: NextFunction) => {
  //       const email = req.body.email
  //       const password = req.body.password
  //       console.log(req)
  //       const user = await User.findOne({ email, password })
  //       console.log(user)
  //       if (!user) {
  //         throw new Error('Invalid Email')
  //       }
  //       if (user?.role !== 'admin') {
  //         throw new Error('Invalid User.You Caanot change data')
  //       }
  //     },
  //   ),
  userController.getAllUsers,
)
router.get('/:id', userController.getSingleUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
