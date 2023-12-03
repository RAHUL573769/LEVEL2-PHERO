import { studentInterface } from "../Student/student.interface";
import { StudentModel, studentSchema } from "../Student/student.model";
import { IUser, NewUser } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoDb = async (
  password: String,
  studentData: studentInterface
) => {
  const userData: Partial<IUser> = {};
  // let user: NewUser = {};

  // userData.password = password || "Defaukt";
  // userData.role = "student";
  // userData.id = "203414342";
  userData.role = "student";
  if (!password) {
    userData.password = "Set to default password as password not given";
  } else {
    userData.password = password as string;
  }

  //set student-role

  const newUser = await UserModel.create(studentData);
  console.log("New Created User", newUser);
  console.log("Sent STUDENT Dta", studentData);
  console.log("Partial user", userData);
  // if (Object.keys(newUser).length) {
  //   studentData.id = newUser.id;
  //   studentData.user = newUser._id;
  //   const newStudent = await StudentModel.create(studentData);
  // }
};

export const UserServices = {
  createStudentIntoDb
};
