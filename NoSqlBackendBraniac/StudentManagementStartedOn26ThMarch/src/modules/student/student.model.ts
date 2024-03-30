import { model, Schema } from "mongoose";
import {
  guardianSchema,
  localGuradianSchema,
  TGuardian,
  TLocalGuardian,
  TUserName,
  userNameSchema
} from "./student.utils";
import { TStudent } from "./student.interface";

const studentSchema = new Schema<TStudent>(
  {
    id: {
      type: String,
      required: [true, "ID is required"],
      unique: true
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, "User id is required"],
      unique: true,
      ref: "User"
    },
    name: {
      type: userNameSchema,
      required: [true, "Name is required"]
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "other"],
        message: "{VALUE} is not a valid gender"
      },
      required: [true, "Gender is required"]
    },
    dateOfBirth: { type: Date },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true
    },
    contactNo: { type: String, required: [true, "Contact number is required"] },
    emergencyContactNo: {
      type: String,
      required: [true, "Emergency contact number is required"]
    },
    bloogGroup: {
      type: String,
      enum: {
        values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        message: "{VALUE} is not a valid blood group"
      }
    },
    presentAddress: {
      type: String,
      required: [true, "Present address is required"]
    },
    permanentAddress: {
      type: String,
      required: [true, "Permanent address is required"]
    },
    guardian: {
      type: guardianSchema,
      required: [true, "Guardian information is required"]
    },
    localGuardian: {
      type: localGuradianSchema,
      required: [true, "Local guardian information is required"]
    },
    profileImg: { type: String },
    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: "AcademicSemester"
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

export const Student = model<TStudent>("Student", studentSchema);