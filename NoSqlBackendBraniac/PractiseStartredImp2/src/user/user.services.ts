import { TStudent } from "../student/student.interface";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDb = async (password: String, studentData: TStudent) => {
  const newUserInPartialUserSchema: Partial<TUser> = {};

  newUserInPartialUserSchema.role = "student";
  //   console.log("9", studentData);
  if (!password) {
    newUserInPartialUserSchema.password = "Default Password";
  } else {
    newUserInPartialUserSchema.password = "12334";
  }

  const newPartialUser = await User.create(newUserInPartialUserSchema);
  newPartialUser.id = "20303024";
  if (Object.keys(newPartialUser).length) {
    console.log("19", newPartialUser);

    studentData.user = newPartialUser._id;
    studentData.id = newPartialUser.id;
  }
  return newPartialUser;
};

export const UserServices = {
  createStudentIntoDb
};
