export type UserRole = "admin" | "student" | "faculty";
export type UserStatus = "in-progress" | "blocked";
export type TUser = {
  id: number;
  password: string;
  needsPasswordChange: boolean;
  role: UserRole;
  status: UserStatus;
  isDeleted: boolean;
};