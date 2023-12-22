import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface.";
import {
  AcademicNameNew,
  AcademicSemesterCode,
  AcademicSemesterMonth,
  TAcademicCode,
  TAcademicName,
  TMonth
} from "../constants/academicSemester.contsnts";

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: Object.values(AcademicNameNew)
    },
    year: {
      type: String
    },
    code: {
      type: String,
      required: true,
      enum: AcademicSemesterCode
    },
    endMonth: {
      type: String,
      enum: AcademicSemesterMonth
    },

    startMonth: {
      type: String,
      enum: AcademicSemesterMonth
    }
  },
  {
    timestamps: true
  }
);

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
