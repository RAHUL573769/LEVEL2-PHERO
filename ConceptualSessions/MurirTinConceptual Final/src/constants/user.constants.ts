export type userRole = "user" | "admin";
export type userStatus = "active" | "inactive";

export const USER_ROLE = {
  admin: "admin",
  user: "user"
} as const;
export const USER_STATUS = {
  active: "active",
  inactive: "inactive"
} as const;
