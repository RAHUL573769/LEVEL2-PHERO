import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import { USER_ROLE, USER_STATUS } from "./user.constants";

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true
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
      enum: Object.values(USER_ROLE)
    },
    // status: {
    //   type: String,
    //   enum: Object.values(USER_STATUS),
    //   default: "inprogress"
    // },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export const User = model<TUser>("User", userSchema);
