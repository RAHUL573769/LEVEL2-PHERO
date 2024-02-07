"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemester = void 0;
const mongoose_1 = require("mongoose");
const academinSemesterContants_1 = require("./academinSemesterContants");
const academicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        enum: academinSemesterContants_1.academicSemesterName
    },
    year: {
        type: Date,
        required: true
    },
    code: {
        type: String,
        required: true,
        enum: {
            values: academinSemesterContants_1.academicSemesterCode
        }
    },
    endMonth: {
        type: String,
        enum: academinSemesterContants_1.months
    },
    startMonth: {
        type: String,
        enum: academinSemesterContants_1.months
    }
});
exports.AcademicSemester = (0, mongoose_1.model)("AcademicSemester", academicSemesterSchema);
