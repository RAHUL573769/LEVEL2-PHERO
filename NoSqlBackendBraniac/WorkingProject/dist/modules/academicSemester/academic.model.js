"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterModel = exports.AcademicSemesterName = exports.months = void 0;
const mongoose_1 = require("mongoose");
exports.months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
exports.AcademicSemesterName = [
    "Autumn",
    "Fall",
    "Summer"
];
const AcademicSemesterCode = ["01", "02", "03"];
const academicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        // required: true
        enum: {
            values: exports.AcademicSemesterName
        }
    },
    year: {
        type: Date
    },
    code: {
        type: String,
        enum: {
            values: AcademicSemesterCode
        }
        // required: true
    },
    startMonth: {
        type: String,
        enum: exports.months
    },
    endMonth: {
        type: String,
        enum: exports.months
    }
});
exports.AcademicSemesterModel = (0, mongoose_1.model)("AcademicSemester", academicSemesterSchema);
