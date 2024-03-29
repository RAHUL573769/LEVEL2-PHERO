import z from "zod";
const academicSemesterValidation = z.object({
  body: z.object({
    name: z.string()
  })
});

export const AcademicSemesterValidation = academicSemesterValidation;
