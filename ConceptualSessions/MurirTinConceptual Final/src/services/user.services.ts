import { IUser } from "../interface/user.interface";
import { User } from "../models/user.model";

const createUser = async (userData: IUser): Promise<IUser> => {
  const result = await User.create(userData); //instance created

  return result;
};

const getAllUser = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

const getSingleUser = async (userId: string): Promise<IUser | null> => {
  const result = await User.findById(userId);
  return result;
};

const updateUser = async (
  userId: string,
  userData: IUser
): Promise<IUser | null> => {
  const result = await User.findByIdAndUpdate(userId, userData, {
    new: true,
    runValidators: true
  });
  return result;
};

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};
export const UserServices = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser
};
