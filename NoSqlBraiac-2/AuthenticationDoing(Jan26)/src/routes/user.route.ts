/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import { userController } from '../controllers/user.controller'
import User from '../models/user.model'
import catchAsyncFunction from '../utils/catchAsync'
import { checkAuth } from '../middlewares/checkAuth'

const router = express.Router()

router.post('/create-user', checkAuth('admin'), userController.createUser)
router.get('/', userController.getAllUsers)
router.get('/:id', userController.getSingleUser)
router.patch('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)

export const userRoutes = router
