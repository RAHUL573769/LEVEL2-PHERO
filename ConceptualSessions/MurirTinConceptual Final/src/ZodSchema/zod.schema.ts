import z from "zod";

export const createTourZodSchema = z.object({
  name: z.string({
    invalid_type_error: "Name Must Be String",
    required_error: "Name is Required"
  }),
  durationHours: z.number().int().positive().min(5),
  ratingAverage: z.number(),
  ratingQuality: z.number(),
  price: z.number(),
  imageCover: z.string(),
  images: z.array(z.object({})),
  createdAt: z.date(),
  location: z.array(z.object({})),
  startLocation: z.string(),
  slug: z.string(),
  reviews: z.array(z.object({})), // You might want to define the Review schema here
  durationDays: z.number()
});
