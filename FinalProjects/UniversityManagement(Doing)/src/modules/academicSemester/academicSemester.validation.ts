import z from "zod";
import {
  TAcademicSemesterName,
  academicSemesterCode,
  academicSemesterName,
  months
} from "./academinSemesterContants";
const createAcademicSemesterValidation = z.object({
  //   id: z.string({ required_error: "Id is Required" }),
  body: z.object({
    name: z.enum([...academicSemesterName] as [string, ...string[]]),
    year: z.date(),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]])
  })
  //   needsPasswordChange: z.boolean().optional(),
  //   role: z.enum(Object.values(USER_ROLE) as [string, ...string[]]).optional(),
  //   status: z
  //     .enum(Object.values(USER_STATUS) as [string, ...string[]])
  //     .optional(),
  //   isDeleted: z.boolean().optional()
});

export const AcademicSemester = { createAcademicSemesterValidation };
