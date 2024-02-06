import z from "zod";
import { USER_ROLE, USER_STATUS, strongPassword } from "./user.constants";
const createUserValidation = z.object({
  //   id: z.string({ required_error: "Id is Required" }),
  password: z
    .string()
    .min(6, { message: "Password Must be 6 Characters Long" })
    .refine((inputPassword) => strongPassword.uppercase.test(inputPassword), {
      message: "Password Must Contain Atleast One UpperCase"
    })
    .refine((inputPassword) => strongPassword.lowercase.test(inputPassword), {
      message: "Password Must Contain Atleast One LowerCase"
    })
    .optional()
  //   needsPasswordChange: z.boolean().optional(),
  //   role: z.enum(Object.values(USER_ROLE) as [string, ...string[]]).optional(),
  //   status: z
  //     .enum(Object.values(USER_STATUS) as [string, ...string[]])
  //     .optional(),
  //   isDeleted: z.boolean().optional()
});

export const UserValidation = { createUserValidation };
