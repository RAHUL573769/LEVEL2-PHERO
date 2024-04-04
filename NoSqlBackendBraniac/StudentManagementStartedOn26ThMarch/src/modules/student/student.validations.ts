import z from "zod";

const createStudentValidation = () => {
  z.object({
    name: z.string(),
    durationHours: z.number().int().positive(),
    ratingAverage: z.number().positive().min(1).max(5)
  });
};

export const StudentValidations = { createStudentValidation };
