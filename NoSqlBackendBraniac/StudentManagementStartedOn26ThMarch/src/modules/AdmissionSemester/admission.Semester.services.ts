import { TAcademicSemester } from "./admission.Semester.interface";
import { AcademicSemester } from "./admission.Semester.model";

const createAcademicSemesterintoDb = async (payload: TAcademicSemester) => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const AcademicSemesterServices = { createAcademicSemesterintoDb };
