import { z } from "zod";
import {
  AcademicSemesterCodes,
  AcademicSemesterMonths,
  AcademicSemesterNames
} from "./academic.semester.model";
import { TAcademicSemester } from "./academic.semester";
const academicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterNames] as [string, ...string[]]),
    year: z.enum([...AcademicSemesterMonths] as [string, ...string[]]),
    code: z.enum([...AcademicSemesterCodes] as [string, ...string[]])
  })
});
export const AcademicSemesterVAalidations = {
  academicSemesterValidation
};
