import { z } from 'zod'

const createZodSchema = z
  .object({
    name: z.string().refine(
      (data) => {
        if (data.length < 5) {
          return false
        }
      },
      {
        message: 'Name must be less tha n 5 characters',
      },
    ),

    durationHours: z.number().int().positive().min(1),
    //   ratingsAverage: z.number().int().positive().min(1).max(5),

    price: z.number().positive(),
    discountPrice: z.number().int().positive().optional(),
  })
  .refine(
    (data) => {
      if (data.discountPrice === undefined) {
        return true
      }
      if (data.discountPrice > data.price) {
        return false
      }
    },
    {
      message: 'Discount Price Must be less than actual price',
    },
  )

export const TourValidation = { createZodSchema }
