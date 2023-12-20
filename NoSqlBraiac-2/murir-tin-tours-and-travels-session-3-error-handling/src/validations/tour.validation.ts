import { z } from 'zod'

export const createTourZodSchema = z
  .object({
    name: z.string(),

    durationHours: z.number().int().positive().min(1),

    ratingAverage: z.number().int().positive().min(1).max(5),
    price: z.number().int().positive().min(1),
    discountPrice: z.number().int().positive().min(1).optional(),
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
      message: 'Discount price must be less than price',
    },
  )

export const TourValidation = { createTourZodSchema }
