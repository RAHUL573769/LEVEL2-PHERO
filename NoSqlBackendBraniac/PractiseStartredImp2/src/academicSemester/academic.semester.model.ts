import { Schema, model } from "mongoose";
import {
  AcademicSemesterCode,
  AcademicSemesterCodes,
  AcademicSemesterMonth,
  AcademicSemesterMonths,
  AcademicSemesterName,
  AcademicSemesterNames
} from "./academic.semester.conts";
import { TAcademicSemester } from "./academic.semester";

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: {
      values: AcademicSemesterNames
    }
  },
  year: {
    type: Date
  },
  code: {
    type: String,
    enum: {
      values: AcademicSemesterCodes
    }
  },
  endMonth: {
    type: String,
    enum: {
      values: AcademicSemesterMonths
    },
    startMonth: {
      type: String,
      enum: {
        values: AcademicSemesterMonths
      }
    }
  }
});

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
