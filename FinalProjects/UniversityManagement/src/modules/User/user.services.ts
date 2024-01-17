import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserService = async (data: TUser): Promise<TUser> => {
  console.log("Data From createUserService", data);
  const result = await User.create(data);
  return result;
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
  createUserService,
  getAllUserService,
  getSingleService,
  updateUserService,
  deleteUserService
};
