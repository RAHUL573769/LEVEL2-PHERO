import { studentInterface } from "../Student/student.interface";
import { StudentModel, studentSchema } from "../Student/student.model";
import { AcademicSemester } from "../academicSemester/acaemic.semester";
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
  userData.id = "203414342";

  //set student-role
  userData.role = "student";

  // const generateStudentId=(payload:AcademicSemester);
  if (!password) {
    userData.password = "Set to default password as password not given";
  } else {
    userData.password = password as string;
  }

  const newUser = await UserModel.create(studentData);
  //create a student
  if (Object.keys(newUser).length) {
    //set id ,_id
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await StudentModel.create(studentData);
    return newStudent; //refrence id
  }

  console.log("32", "New Created User", newUser);
  console.log("33", "Sent STUDENT Dta", studentData);
  console.log("34", "Partial user", userData);
  // if (Object.keys(newUser).length) {
  //   studentData.id = newUser.id;
  //   studentData.user = newUser._id;
  //   const newStudent = await StudentModel.create(studentData);
  // }
};

export const UserServices = {
  createStudentIntoDb
};
