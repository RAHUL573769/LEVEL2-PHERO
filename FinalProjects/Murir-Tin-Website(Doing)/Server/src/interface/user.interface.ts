import { Model } from "mongoose";
import { IUserRole, TUserStatus } from "../constants/user.constanta";

export interface IUser {
  name: string;
  age: number;
  email: string;
  photo: string;
  role: IUserRole;
  userStatus: TUserStatus;
}

interface IUserExists {
  name: string;
  email?: string;
}

export interface UserModel extends Model<IUser> {
  isUserExists(params: IUserExists): string;
}
