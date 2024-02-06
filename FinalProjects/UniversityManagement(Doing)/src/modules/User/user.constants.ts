export type TUserStatus = "inprogress" | "blocked";
export type TUserRole = "admin" | "student" | "faculty";

export const USER_STATUS = {
  inprogress: "in-progress",
  blocked: "blocked"
} as const;

export const USER_ROLE = {
  admin: "admin",
  student: "student",
  faculty: "faculty"
} as const;
export const strongPassword = {
  uppercase: /(?=.*[A-Z])/,
  lowercase: /(?=.*[a-z])/,
  digit: /(?=.*\d)/,
  special: /(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/,
  length: /.{6,}/
};
