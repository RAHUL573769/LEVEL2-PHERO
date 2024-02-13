import { Request, Response } from "express";
import { IUser } from "../interface/user.interface";
import { User } from "../model/user.model";

const createUserIntoDb = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

const getUserServices = async () => {
  const result = await User.find();

  // const result = await User.aggregate([
  //   {
  //     $project: {
  //       _id: 0,
  //       name: 1,
  //       age: 1,
  //       email: 0,
  //       photo: 1,
  //       role: 1,
  //       userStatus: 1
  //     }
  //   }
  // ]);
  return result;
};

export const UserServices = {
  createUserIntoDb,
  getUserServices
};
