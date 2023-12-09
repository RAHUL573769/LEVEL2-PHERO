"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterVAalidations = void 0;
const zod_1 = require("zod");
const academic_semester_model_1 = require("./academic.semester.model");
const academicSemesterValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academic_semester_model_1.AcademicSemesterNames]),
        year: zod_1.z.enum([...academic_semester_model_1.AcademicSemesterMonths]),
        code: zod_1.z.enum([...academic_semester_model_1.AcademicSemesterCodes])
    })
});
exports.AcademicSemesterVAalidations = {
    academicSemesterValidation
};
