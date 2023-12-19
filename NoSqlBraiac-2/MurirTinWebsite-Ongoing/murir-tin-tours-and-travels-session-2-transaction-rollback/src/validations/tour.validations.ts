import { z } from 'zod'

const createZodSchema = z.object({
  name: z.string(),

  durationHours: z.number().int().positive().min(1),
  //   ratingsAverage: z.number().int().positive().min(1).max(5),

  price: z.number().positive(),
})

export const TourValidation = { createZodSchema }
