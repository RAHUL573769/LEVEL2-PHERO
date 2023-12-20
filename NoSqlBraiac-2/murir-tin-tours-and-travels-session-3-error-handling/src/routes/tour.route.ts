/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express'
import { tourController } from '../controllers/tour.controller'
import {
  TourValidation,
  createTourZodSchema,
} from '../validations/tour.validation'
import { AnyZodObject, ZodSchema } from 'zod'

const validator = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParse(req.body)
    if (!result.success) {
      next(result.error)
    } else {
      req.body = result.data
      next()
    }
  }
}

//   const id = req.params.id
//   console.log(req.body)
//   console.log(id)
//   res.status(200).json({
//     body: req.body,
//   })

const router = express.Router()

// const catchAsyncFunction = (fn: any) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res)).catch((error: any) => next(error))
//   }
// }

router.post(
  '/create-tour',
  validator(TourValidation.createTourZodSchema),
  tourController.createTour,
)

router.get('/', tourController.getAllTours)
// router.get('/', catchAsyncFunction() ------> (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res)).catch((error: any) => next(error))
//   })
//router jokhon funtion ke call kore tokhon o oi function er modhe req, res, next ei 3 ta diye dey
//tourController.getAllTours(req, res, next)
router.get('/:id', validator, tourController.getSingleTour)
router.patch('/:id', tourController.updateTour)
router.delete('/:id', tourController.deleteTour)
router.get('/:id/next-schedule', tourController.getNextSchedule)

export const tourRoutes = router
