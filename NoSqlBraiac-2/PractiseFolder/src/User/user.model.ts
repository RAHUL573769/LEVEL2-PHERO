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
      required: true,
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
      enum: UserStatus
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
