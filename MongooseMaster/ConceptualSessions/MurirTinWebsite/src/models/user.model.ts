import { Schema, model } from "mongoose";
import { IUser } from "../interface/user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Please Tell Your Name"]
  },
  age: {
    type: Number,
    required: [true, "Please Tell Your Age"]
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please ENTER your Email"]
  },
  photo: String,

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  },
  userStatus: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }
});
const User = model<IUser>("user", userSchema);
export default User;
