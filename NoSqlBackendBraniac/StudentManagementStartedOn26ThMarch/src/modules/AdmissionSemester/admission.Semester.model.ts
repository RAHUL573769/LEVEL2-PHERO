import { model, Schema } from "mongoose";
import {
  TAcademicSemester,
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths
} from "./admission.Semester.interface";
import {
  AcademicSemesterCodes,
  AcademicSemesterName,
  Month
} from "./admission.Semester.utils";

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
    enum: AcademicSemesterName
  },
  year: {
    type: String
  },

  code: {
    type: String,
    enum: AcademicSemesterCodes
  },
  startMonth: {
    type: String,
    enum: Month
  },
  endMonth: {
    type: String,
    enum: Month
  }
});

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
