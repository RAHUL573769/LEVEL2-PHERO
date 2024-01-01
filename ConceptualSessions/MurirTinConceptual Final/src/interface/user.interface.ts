import { userRole, userStatus } from "../constants/user.constants";

export interface IUser {
  name: string;
  age: number;
  email: string;
  photo: string;
  role: userRole;
  userStatus: userStatus;
}
