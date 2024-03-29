"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemester = void 0;
const mongoose_1 = require("mongoose");
const admission_Semester_utils_1 = require("./admission.Semester.utils");
const academicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        enum: admission_Semester_utils_1.AcademicSemesterName
    },
    year: {
        type: Date
    },
    code: {
        type: String,
        enum: admission_Semester_utils_1.AcademicSemesterCodes
    },
    startMonth: {
        type: String,
        enum: admission_Semester_utils_1.Month
    },
    endMonth: {
        type: String,
        enum: admission_Semester_utils_1.Month
    }
});
exports.AcademicSemester = (0, mongoose_1.model)("AcademicSemester", academicSemesterSchema);
