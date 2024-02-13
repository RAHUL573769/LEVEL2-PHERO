export type IUserRole = "user" | "admin";
export type TUserStatus = "active" | "inactive";

export const USER_ROLE = {
  USER: "user",
  ADMIN: "admin"
} as const;

export const USER_STATUS = {
  ACTIVE: "active",
  INACTIVE: "in-active"
} as const;
