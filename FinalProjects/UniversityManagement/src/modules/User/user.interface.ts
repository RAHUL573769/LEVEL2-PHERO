import { TUserRole, TUserStatus } from "./user.constants";

export type TUser = {
  id: string;
  password: string;
  role: TUserRole;
  status: TUserStatus;
  isDeleted: boolean;
  needsPasswordChange: boolean;
  createdAt: Date;
};
