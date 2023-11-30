"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const RoleEnum = zod_1.z.enum(["admin", "user", "guest"]);
const StatusEnum = zod_1.z.enum(["in-progress", "completed", "cancelled"]);
const userValidationSchema = zod_1.z.object({
    id: zod_1.z.number(),
    password: zod_1.z.string(),
    needsPasswordChange: zod_1.z.boolean().default(true),
    role: RoleEnum,
    status: StatusEnum.default("in-progress"),
    isDeleted: zod_1.z.boolean().default(false)
});
