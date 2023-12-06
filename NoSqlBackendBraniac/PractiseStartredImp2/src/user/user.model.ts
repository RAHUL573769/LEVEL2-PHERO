import { Schema, model } from "mongoose";
import { IUserRole, IUserStatus, TUser } from "./user.interface";

export const UserRole: IUserRole[] = ["admin", "faculty", "student"];

export const UserStatus: IUserStatus[] = ["blocked", "in-progress"];
const userSchema = new Schema<TUser>(
  {
    id: {
      type: String
    },
    password: {
      type: String
    },
    needsPasswordChange: {
      type: Boolean
    },
    role: {
      type: String,
      enum: {
        values: UserRole
      }
    },
    status: {
      type: String,
      enum: {
        values: UserStatus
      },
      default: "in-progress"
    },
    isDeleted: {
      type: Boolean
    }
  },
  {
    timestamps: true
  }
);
export const User = model<TUser>("User", userSchema);
