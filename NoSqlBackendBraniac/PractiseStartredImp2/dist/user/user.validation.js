"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    password: zod_1.z
        .string()
        .max(20, { message: "Password Cannot be mire than 20 Characters Long" }),
    needsPasswordChange: zod_1.z.boolean(),
    //   role: z.enum(["admin", "faculty", "student"]),
    //   status: z.enum(["blocked", "in-progress"]),
    isDeleted: zod_1.z.boolean().optional()
});
exports.UserValidations = {
    userValidationSchema
};
