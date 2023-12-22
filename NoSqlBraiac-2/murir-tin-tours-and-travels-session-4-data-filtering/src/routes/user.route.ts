/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import express, { Request, Response } from 'express'
import { userController } from '../controllers/user.controller'
import User from '../models/user.model'
import catchAsyncFunction from '../utils/catchAsync'
import { checkAuth } from '../middlewares/auth'
import { NextFunction } from 'express'

const router = express.Router()

router.post(
  '/create-user',

  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    console.log(email)

    const user = await User.find({ email })
    console.log('22', user)
    if (!user) {
      res.status(400).json({
        status: 'Fail',
        mesage: 'Invalid User or Password',
      })
    }
  },

  userController.createUser,
)
router.get(
  '/',
  async (req: Request, res: Response, next: NextFunction) => {
    const email = req.body.email
    const password = req.body.password
    const name = req.body.name
    console.log(email)

    const user = await User.find({ email })
    console.log(user)
    if (!user) {
      res.status(400).json({
        status: 'Fail',
        mesage: 'Invalid User or Password',
      })
    }
  },

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
