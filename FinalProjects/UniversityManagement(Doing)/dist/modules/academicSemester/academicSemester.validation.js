"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemester = void 0;
const zod_1 = __importDefault(require("zod"));
const academinSemesterContants_1 = require("./academinSemesterContants");
const createAcademicSemesterValidation = zod_1.default.object({
    //   id: z.string({ required_error: "Id is Required" }),
    body: zod_1.default.object({
        name: zod_1.default.enum([...academinSemesterContants_1.academicSemesterName]),
        year: zod_1.default.date(),
        code: zod_1.default.enum([...academinSemesterContants_1.academicSemesterCode]),
        startMonth: zod_1.default.enum([...academinSemesterContants_1.months]),
        endMonth: zod_1.default.enum([...academinSemesterContants_1.months])
    })
    //   needsPasswordChange: z.boolean().optional(),
    //   role: z.enum(Object.values(USER_ROLE) as [string, ...string[]]).optional(),
    //   status: z
    //     .enum(Object.values(USER_STATUS) as [string, ...string[]])
    //     .optional(),
    //   isDeleted: z.boolean().optional()
});
exports.AcademicSemester = { createAcademicSemesterValidation };
