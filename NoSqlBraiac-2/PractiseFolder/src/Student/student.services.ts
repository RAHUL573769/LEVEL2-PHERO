import { IStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudent = async (studentData: IStudent): Promise<IStudent> => {
  const result = await Student.create(studentData);

  return result;
};
export const StudentServices = { createStudent };
