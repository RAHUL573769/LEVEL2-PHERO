import { TStudent } from "../Student/student.interface";
import { Student } from "../Student/student.model";
import { NewUser, TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentService = async (
  password: string,
  studentData: TStudent
) => {
  console.log("Data From createUserService", studentData);
  //create a user object
  const userData: Partial<TUser> = {};

  //if password not given,use default password
  if (!password) {
    userData.password = "Default Password";
  } else {
    userData.password = password;
  }
  //set student role
  userData.password = "student";
  //manually set id
  userData.id = "203032";
  //create a user
  const result = await User.create(userData);
  //create a student
  if (Object.keys(result).length) {
    //set id,_id as user
    studentData.id = result.id;
    studentData.user = result._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
  // const result = await User.create(studentData);
};

const getAllUserService = async (): Promise<TUser[]> => {
  const result = await User.find();
  return result;
};

const getSingleService = async (id: string): Promise<TUser | null> => {
  const result = await User.findById(id);
  return result;
};

const updateUserService = async (
  id: string,
  data: TUser
): Promise<TUser | null> => {
  const result = await User.findByIdAndUpdate(id, data, {
    runValidators: true,
    new: true
  });
  return result;
};

const deleteUserService = async (id: string): Promise<TUser | null> => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const UserServices = {
  createStudentService,
  getAllUserService,
  getSingleService,
  updateUserService,
  deleteUserService
};
