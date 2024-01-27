/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import { authController } from './auth.controller'

const router = express.Router()

router.post('/login', authController.login)

router.post('/register', authController.register)

export const authRoutes = router
