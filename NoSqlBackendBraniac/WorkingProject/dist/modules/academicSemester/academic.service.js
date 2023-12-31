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
exports.AcademicSemesterServices = void 0;
const academic_model_1 = require("./academic.model");
const createAcademicSemester = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const academicSemesterCodeMapper = {
        Autumn: "01",
        Summer: "02",
        Fall: "03"
    };
    if (academicSemesterCodeMapper[payLoad.name] !== payLoad.code) {
        throw new Error("There is error in Code");
    }
    const result = yield academic_model_1.AcademicSemesterModel.create(payLoad);
    return result;
});
exports.AcademicSemesterServices = {
    createAcademicSemester
};
