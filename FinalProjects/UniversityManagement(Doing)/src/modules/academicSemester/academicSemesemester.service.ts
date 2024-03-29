import {
  TAcademicSemester,
  TAcademicSemesterMapper
} from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemester = async (
  data: TAcademicSemester
): Promise<TAcademicSemester> => {
  //create a user

  //   AcademicSemester.findOne()

  const academicSemesterCodeMapper: TAcademicSemesterMapper = {
    Autumn: "01",
    Summar: "02",
    Fall: "03"
  };
  if (academicSemesterCodeMapper[data.name] !== data.code) {
    throw new Error("Invalid Semester Code");
  }
  const result = await AcademicSemester.create(data);
  //create a student

  return result;
};

const getAllAcademicSemester = async (): Promise<TAcademicSemester[]> => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemester = async (
  id: string
): Promise<TAcademicSemester | null> => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const updateAcademicSemester = async (
  id: string,
  data: TAcademicSemester
): Promise<TAcademicSemester | null> => {
  const result = await AcademicSemester.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true
  });
  return result;
};

const deleteAcademicSemester = async (
  id: string
): Promise<TAcademicSemester | null> => {
  const result = await AcademicSemester.findByIdAndDelete(id);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateAcademicSemester,
  deleteAcademicSemester
};
