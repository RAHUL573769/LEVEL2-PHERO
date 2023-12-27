import express from 'express'
import { authController } from './auth.controller'
// import { userController } from '../controllers/user.controller'
// import { checkAuth } from '../middlewares/checkAuth'
// import User from '../models/user.model'
// import catchAsyncFunction from '../utils/catchAsync'

const router = express.Router()

router.post(
  '/register',
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars

  authController.register,
)
// router.post(
//   '/login',
//   // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars

//   authController.login,
// )

export const authRoutes = router
