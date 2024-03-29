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
exports.UserControllers = void 0;
const user_services_1 = require("./user.services");
const sendRespons_1 = require("../../utils/sendRespons");
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
// const catchAsync = (fn: any) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((error) => {
//       next(error);
//     });
//   };
// };
const createStudent = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, student: studentData } = req.body;
    const result = yield user_services_1.UserService.createIntoDb(password, studentData);
    console.log("From User Controller Line 9", req.body);
    (0, sendRespons_1.successResponse1)(res, {
        message: "Student Data Created Successfully",
        statusCode: http_status_1.default.CREATED,
        data: result,
        status: "Success"
    });
}));
exports.UserControllers = {
    createStudent
};
