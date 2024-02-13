import { Request, Response } from "express";
import { IUser } from "../interface/user.interface";
import { User } from "../model/user.model";

const createUserIntoDb = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

export const UserServices = {
  createUserIntoDb
};
