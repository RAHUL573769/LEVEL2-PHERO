import { IUserRole, IUserStatus } from "../constants/userConstants";

export type IUser = {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: IUserRole;
  status: IUserStatus;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
};
