import { Schema, model } from "mongoose";
import { IUser } from "../interface/user.interface";
import { USER_ROLE, USER_STATUS } from "../constants/user.constants";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Please Tell YoUR Name"],
    unique: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true
  },

  photo: {
    type: String
  },
  role: {
    type: String,
    enum: Object.values(USER_ROLE),
    default: "user"
  },
  age: {
    type: Number,
    required: [true, "Please Tell Your Age"]
  },
  userStatus: {
    type: String,
    enum: Object.values(USER_STATUS)
  }
});

export const User = model<IUser>("User", userSchema);
