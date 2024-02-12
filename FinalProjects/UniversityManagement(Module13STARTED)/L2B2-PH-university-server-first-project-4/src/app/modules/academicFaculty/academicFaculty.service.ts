import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  // create a user
  const newAcademicFaculty = await AcademicFaculty.create(payload);

  return newAcademicFaculty;
};

const getAllAcademicFaculty = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.aggregate([{ $match: { id } }]);
  return result;
};

const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: TAcademicFaculty,
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.updateOne({ id }, { isDeleted: true });
  return result;
};

export const AcademicFacultyServices = {
  updateAcademicFacultyIntoDB,
  createAcademicFacultyIntoDB,
  getAllAcademicFaculty,
  getSingleAcademicFacultyFromDB,
  deleteAcademicFacultyFromDB,
};
