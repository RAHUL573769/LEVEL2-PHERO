import { studentInterface } from "../Student/student.interface";
import { StudentModel, studentSchema } from "../Student/student.model";
import { IUser } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoDb = async (
  studentData: studentInterface,
  password: string
) => {
  const userData: Partial<IUser> = {};

  userData.password = password || "Defaukt";
  userData.role = "student";
  userData.id = "203414342";

  const newUser = await UserModel.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await StudentModel.create(studentData);
  }
};

export const UserServices = {
  createStudentIntoDb
};
