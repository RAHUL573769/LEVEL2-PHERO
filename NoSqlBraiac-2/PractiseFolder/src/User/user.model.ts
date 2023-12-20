import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";
import {
  IUserRole,
  IUserStatus,
  UserRole,
  UserStatus
} from "../constants/userConstants";

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: false,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    needsPasswordChange: {
      type: Boolean,
      default: true
    },
    role: {
      type: String,
      enum: UserRole
    },
    status: {
      type: String,
      enum: UserStatus,
      default: "in-progress"
    },
    createdAt: {
      type: Date
    },
    updatedAt: {
      type: Date
    }
  },
  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
