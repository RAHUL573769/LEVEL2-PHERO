import { Schema, model } from "mongoose";
import { IUser, UserModel } from "../interface/user.interface";
import { USER_ROLE, USER_STATUS } from "../constants/user.constanta";

const userSchema = new Schema<IUser, UserModel>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    select: 0
  },
  email: {
    type: String,
    unique: true
  },
  photo: {
    type: String
  },
  role: {
    type: String,
    enum: {
      values: Object.values(USER_ROLE)
    }
  },
  userStatus: {
    type: String,
    enum: {
      values: Object.values(USER_STATUS),
      message: "Role is either User or Admin,"
    }
  }
});

export const User = model<IUser, UserModel>("User", userSchema);
