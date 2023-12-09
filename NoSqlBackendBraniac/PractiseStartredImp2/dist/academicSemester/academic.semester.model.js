"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemester = exports.AcademicSemesterMonths = exports.AcademicSemesterCodes = exports.AcademicSemesterNames = void 0;
const mongoose_1 = require("mongoose");
exports.AcademicSemesterNames = [
    "Autumn",
    "Fall",
    "Summer"
];
exports.AcademicSemesterCodes = ["01", "02", "03"];
exports.AcademicSemesterMonths = [
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
const academicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        enum: {
            values: exports.AcademicSemesterNames
        }
    },
    year: {
        type: Date
    },
    code: {
        type: String,
        enum: {
            values: exports.AcademicSemesterCodes
        }
    },
    endMonth: {
        type: String,
        enum: {
            values: exports.AcademicSemesterMonths
        },
        startMonth: {
            type: String,
            enum: {
                values: exports.AcademicSemesterMonths
            }
        }
    }
});
exports.AcademicSemester = (0, mongoose_1.model)("AcademicSemester", academicSemesterSchema);
