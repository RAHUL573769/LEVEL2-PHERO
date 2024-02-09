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
exports.AcademicSemesterController = void 0;
const catchAsyncFunction_1 = require("../../utils/catchAsyncFunction");
const successResponse_1 = require("../../utils/successResponse");
const academicSemesemester_service_1 = require("./academicSemesemester.service");
const http_status_1 = __importDefault(require("http-status"));
const createAcademicSemesterController = (0, catchAsyncFunction_1.catchAsyncFunction)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("ReqBody", req.body);
        //   const { password, student: studentData } = req.body;
        // throw Error("Error From User Controllers");
        const result = yield academicSemesemester_service_1.AcademicSemesterServices.createAcademicSemester(req.body);
        // console.log("result from createStudentController", result);
        (0, successResponse_1.successResponse)(res, {
            statusCode: 200,
            message: "AcademicSemester Created successfully",
            data: result
        });
        // res.status(202).json({
        //   message: "Student Created Successfully",
        //   status: "Success",
        //   data: result
        // });
    }
    catch (error) {
        next(error);
    }
}));
const getAllAcademicSemester = (0, catchAsyncFunction_1.catchAsyncFunction)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicSemesemester_service_1.AcademicSemesterServices.getAllAcademicSemester();
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: "Academic Semester Data are retrieved succesfully",
        data: result
    });
}));
const getSingleAcademicSemester = (0, catchAsyncFunction_1.catchAsyncFunction)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield academicSemesemester_service_1.AcademicSemesterServices.getSingleAcademicSemester(id);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: "Single Academic Semester Data is retrieved successfully",
        data: result
    });
}));
const deleteAcademicSemester = (0, catchAsyncFunction_1.catchAsyncFunction)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { studentId } = req.params;
    const result = yield academicSemesemester_service_1.AcademicSemesterServices.deleteAcademicSemester(studentId);
    (0, successResponse_1.successResponse)(res, {
        statusCode: http_status_1.default.OK,
        message: "Academic Semester is deleted successfully",
        data: result
    });
}));
/////////////////optional task doing below
exports.AcademicSemesterController = {
    createAcademicSemesterController,
    getAllAcademicSemester,
    deleteAcademicSemester,
    getSingleAcademicSemester
};
