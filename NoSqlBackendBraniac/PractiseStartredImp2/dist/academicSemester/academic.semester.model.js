"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemester = void 0;
const mongoose_1 = require("mongoose");
const academic_semester_conts_1 = require("./academic.semester.conts");
const academicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        enum: {
            values: academic_semester_conts_1.AcademicSemesterNames
        }
    },
    year: {
        type: Date
    },
    code: {
        type: String,
        enum: {
            values: academic_semester_conts_1.AcademicSemesterCodes
        }
    },
    endMonth: {
        type: String,
        enum: {
            values: academic_semester_conts_1.AcademicSemesterMonths
        },
        startMonth: {
            type: String,
            enum: {
                values: academic_semester_conts_1.AcademicSemesterMonths
            }
        }
    }
});
exports.AcademicSemester = (0, mongoose_1.model)("AcademicSemester", academicSemesterSchema);
