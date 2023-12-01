import { IStudent } from "../student/student.interface";
import { IUser } from "./user.interface";

const createIntoDb = async (password: string, studentData: IStudent) => {
  const userData: Partial<IUser> = {};

  userData.password = password;
  userData.role = "student";
  userData.id = 324256;

  console.log(userData);
};
export const userServices = { createIntoDb };
