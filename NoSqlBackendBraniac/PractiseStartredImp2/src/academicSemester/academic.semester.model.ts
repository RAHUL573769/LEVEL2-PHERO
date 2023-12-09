import { Schema, model } from "mongoose";
import {
  AcademicSemesterCode,
  AcademicSemesterMonth,
  AcademicSemesterName
} from "./academic.semester.conts";
import { TAcademicSemester } from "./academic.semester";

export const AcademicSemesterNames: AcademicSemesterName[] = [
  "Autumn",
  "Fall",
  "Summer"
];
export const AcademicSemesterCodes: AcademicSemesterCode[] = ["01", "02", "03"];
export const AcademicSemesterMonths: AcademicSemesterMonth[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
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
