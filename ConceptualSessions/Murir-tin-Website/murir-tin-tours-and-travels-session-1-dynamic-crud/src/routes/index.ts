import express from 'express'
import { userRoutes } from './user.route'
import { tourRoutes } from './tour.route'
import { reviewRoutes } from './review.route'

const globalRouter = express.Router()
globalRouter.use('/users', userRoutes)

globalRouter.use('/tours', tourRoutes)
globalRouter.use('/reviews', reviewRoutes)

export default globalRouter
