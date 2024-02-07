"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const user_constants_1 = require("./user.constants");
const createUserValidation = zod_1.default.object({
    //   id: z.string({ required_error: "Id is Required" }),
    body: zod_1.default.object({
        password: zod_1.default
            .string()
            .min(6, { message: "Password Must be 6 Characters Long" })
            .refine((inputPassword) => user_constants_1.strongPassword.uppercase.test(inputPassword), {
            message: "Password Must Contain Atleast One UpperCase"
        })
            .refine((inputPassword) => user_constants_1.strongPassword.lowercase.test(inputPassword), {
            message: "Password Must Contain Atleast One LowerCase"
        })
            .optional()
    })
    //   needsPasswordChange: z.boolean().optional(),
    //   role: z.enum(Object.values(USER_ROLE) as [string, ...string[]]).optional(),
    //   status: z
    //     .enum(Object.values(USER_STATUS) as [string, ...string[]])
    //     .optional(),
    //   isDeleted: z.boolean().optional()
});
exports.UserValidation = { createUserValidation };
