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
exports.studentController = void 0;
const student_service_1 = require("./student.service");
// const catchAsync = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((err) => console.log(err));
//   };
// };
const catchAsync = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => console.log(err));
    };
};
const getStudents = catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentServices.getSingleStudentFromDb(studentId);
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "Student is retrieved succesfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
}));
const getAllStudents = catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentServices.getAllStudentsFromDb();
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "All Student is retrieved succesfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
}));
const deleteStudent = catchAsync((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentServices.deleteDataFromDb(studentId);
        res.status(200).json({
            statusCode: 200,
            success: true,
            message: "Student is Deleted succesfully",
            data: result
        });
    }
    catch (err) {
        next(err);
    }
}));
exports.studentController = {
    getStudents,
    getAllStudents,
    deleteStudent
};
