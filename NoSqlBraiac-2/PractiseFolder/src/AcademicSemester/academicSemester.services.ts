import { TAcademicSemester } from "./academicSemester.interface.";
import { AcademicSemester } from "./academicsemester.model";

const createAcademicSemester = async (academicData: TAcademicSemester) => {
  const result = await AcademicSemester.create(academicData);
  return result;
};

export const AcademicSemesterServices = { createAcademicSemester };
