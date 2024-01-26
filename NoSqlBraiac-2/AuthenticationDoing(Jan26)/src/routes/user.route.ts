/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
      const user = await User.findOne({ email, password })

      if (!user) {
        res.status(404).json({
          status: 'Fail',
          message: 'Invalid Emai',
        })
      }
      if (user?.role !== 'admin') {
        res.status(404).json({
          status: 'Fail',
          message: 'You are not authorized',
        })
      }
      next()
    },
  ),
  userController.createUser,
)
router.get(
  '/',
  catchAsyncFunction(
    async (req: Request, res: Response, next: NextFunction) => {
      const email = req.body.email
      const password = req.body.password
      const user = await User.findOne({ email, password })

      if (!user) {
        // res.status(404).json({
        //   status: 'Fail',
        //   message: 'Invalid Emai',
        // })

        throw new Error('invalid Credentials')
      }
      if (user?.role !== 'admin') {
        throw new Error('u are not admin')
      }
      next()
    },
  ),
  userController.getAllUsers,
)
router.get('/:id', userController.getSingleUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
