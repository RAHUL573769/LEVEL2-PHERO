import { Student } from "./student.model";

const getStudentsFromDb = async () => {
  const result = await Student.find();

  return result;
};

const getSingleStudentInfo = async (id: String) => {
  const result = await Student.findOne(id);

  return result;
};
const updateStudentsInfoInDb = async (id: String, payload: String) => {
  const result = await Student.findByIdAndUpdate(
    { _id: id, payload },
    { new: true }
  );
};
export const StudentServices = {
  getSingleStudentInfo,
  getStudentsFromDb,
  updateStudentsInfoInDb
};
