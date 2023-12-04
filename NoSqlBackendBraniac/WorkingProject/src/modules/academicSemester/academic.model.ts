import { Schema, model } from "mongoose";
import {
  AcademicSemester,
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonth
} from "./acaemic.semester";

export const months: TMonth[] = [
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
export const AcademicSemesterName: TAcademicSemesterName[] = [
  "Autumn",
  "Fall",
  "Summer"
];
const AcademicSemesterCode: TAcademicSemesterCode[] = ["01", "02", "03"];
const academicSemesterSchema = new Schema<AcademicSemester>({
  name: {
    type: String,
    // required: true

    enum: {
      values: AcademicSemesterName
    }
  },
  year: {
    type: Date
  },
  code: {
    type: String,
    enum: {
      values: AcademicSemesterCode
    }
    // required: true
  },
  startMonth: {
    type: String,
    enum: months
  },
  endMonth: {
    type: String,
    enum: months
  }
});

export const AcademicSemesterModel = model<AcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
