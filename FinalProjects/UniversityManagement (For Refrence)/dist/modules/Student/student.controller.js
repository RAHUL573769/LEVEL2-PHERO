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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentControllers = void 0;
const catchAsyncFunction_1 = require("../../utils/catchAsyncFunction");
const successResponse_1 = require("../../utils/successResponse");
const student_services_1 = require("./student.services");
const http_status_1 = __importDefault(require("http-status"));
const getSingleStudent = (0, catchAsyncFunction_1.catchAsyncFunction)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentId } = req.params;
    const result = yield student_services_1.StudentServices.getSingleStudentFromDB(studentId);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: "Student is retrieved succesfully",
        data: result
    });
}));
const getAllStudents = (0, catchAsyncFunction_1.catchAsyncFunction)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_services_1.StudentServices.getAllStudentsFromDB();
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: "Student are retrieved succesfully",
        data: result
    });
}));
const deleteStudent = (0, catchAsyncFunction_1.catchAsyncFunction)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentId } = req.params;
    const result = yield student_services_1.StudentServices.deleteStudentFromDB(studentId);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: "Student is deleted succesfully",
        data: result
    });
}));
exports.StudentControllers = {
    getAllStudents,
    getSingleStudent,
    deleteStudent
};
