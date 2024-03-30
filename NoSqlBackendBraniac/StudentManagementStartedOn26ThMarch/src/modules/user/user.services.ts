import { TAcademicSemester } from "../AdmissionSemester/admission.Semester.interface";
import { AcademicSemester } from "../AdmissionSemester/admission.Semester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

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
  //year semesterCode 4 digit code

  //find academic semester info

  userData.role = "student";
  //manually genertated id
  // userData.id = "20r30353";

  //find academic semester data from student collection
  const admissionSemester = await AcademicSemester.findById(
    studentData.admissionSemester
  );

  //find academic semester data from student collection

  userData.id = await generateStudentId(admissionSemester as TAcademicSemester);

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
