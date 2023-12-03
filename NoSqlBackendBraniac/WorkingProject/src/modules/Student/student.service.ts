import { StudentModel } from "./student.model";

const getAllStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDb = async (id: string) => {
  const result = await StudentModel.aggregate([{ $match: { id } }]);
  return result;
};

const deleteDataFromDb = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  getAllStudentsFromDb,
  getSingleStudentFromDb,
  deleteDataFromDb
};
