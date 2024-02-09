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
academicSemesterSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const isSemesterExists = yield exports.AcademicSemester.findOne({
            name: this.name,
            year: this.year
        });
        if (isSemesterExists) {
            throw new Error("Semester Already Exist");
        }
    });
});
exports.AcademicSemester = (0, mongoose_1.model)("AcademicSemester", academicSemesterSchema);
