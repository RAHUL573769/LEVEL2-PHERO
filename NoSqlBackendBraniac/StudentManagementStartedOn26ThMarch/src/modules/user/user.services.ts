import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";

const createIntoDb = async (password: string, studentData: TStudent) => {
  //create a user object

  // const userData: NewUser = {
  //   role: "",
  //   password: "",
  //   id: ""
  // };

  const userData: Partial<TUser> = {};

  //if password not given Use default password
  if (!password) {
    password = "Default Password";
  } else {
    userData.password = password;
  }

  //set student role

  userData.role = "student";
  //manually genertated id

  userData.id = "20r30353";
  const result = await User.create(userData);
  if (Object.keys(result).length) {
    studentData.id = result.id;
    studentData.user = result._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
  return result;
};

export const UserService = {
  createIntoDb
};
