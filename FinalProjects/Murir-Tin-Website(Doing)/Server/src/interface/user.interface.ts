import { IUserRole, TUserStatus } from "../constants/user.constanta";

export interface IUser {
  name: string;
  age: number;
  email: string;
  photo: string;
  role: IUserRole;
  userStatus: TUserStatus;
}
