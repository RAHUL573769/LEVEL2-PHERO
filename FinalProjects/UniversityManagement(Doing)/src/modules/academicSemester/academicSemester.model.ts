import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import {
  academicSemesterCode,
  academicSemesterName,
  months
} from "./academinSemesterContants";

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
    enum: academicSemesterName
  },
  year: {
    type: Date,
    required: true
  },
  code: {
    type: String,
    required: true,
    enum: {
      values: academicSemesterCode
    }
  },
  endMonth: {
    type: String,
    enum: months
  },
  startMonth: {
    type: String,
    enum: months
  }
});

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
