import { TAcademicSemester } from "./academic.semester";
import { AcademicSemester } from "./academic.semester.model";

const getAcademicSemesterFromDb = async () => {
  const result = await AcademicSemester.find();

  return result;
};

const createAcademicSemesterFromDb = async (payload: TAcademicSemester) => {
  const result = await AcademicSemester.create(payload);

  return result;
};

const getSingleAcademicSemesterInfo = async (id: String) => {
  const result = await AcademicSemester.findOne(id);

  return result;
};
const updateAcademicSemesterInfoInDb = async (id: String, payload: String) => {
  const result = await AcademicSemester.findByIdAndUpdate(
    { _id: id, payload },
    { new: true }
  );
};
export const AcademicSemesterServices = {
  getSingleAcademicSemesterInfo,
  getAcademicSemesterFromDb,
  updateAcademicSemesterInfoInDb,
  createAcademicSemesterFromDb
};
