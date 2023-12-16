"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        type: Number
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
//Document Middlewares
academicSemesterSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isSemesterExist = yield exports.AcademicSemester.findOne({
            name: this.name,
            year: this.year
        });
        if (isSemesterExist) {
            throw new Error("Semester Already Exists");
        }
    });
});
exports.AcademicSemester = (0, mongoose_1.model)("AcademicSemester", academicSemesterSchema);