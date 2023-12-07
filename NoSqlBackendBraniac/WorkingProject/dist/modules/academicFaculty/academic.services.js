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
const createAcademicFaculty = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academic_model_1.AcademicFaculty.create(payLoad);
    return result;
});
const getAcademicFaculty = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academic_model_1.AcademicFaculty.find();
    return result;
});
const getSingleAcademicFaculty = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academic_model_1.AcademicFaculty.findById(id);
    return result;
});
const updateAcademicFaculty = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academic_model_1.AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
        new: true
    });
    return result;
});
exports.AcademicSemesterServices = {
    createAcademicFaculty,
    getAcademicFaculty,
    getSingleAcademicFaculty,
    updateAcademicFaculty
};
