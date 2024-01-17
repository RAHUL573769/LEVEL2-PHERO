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
exports.UserController = void 0;
const user_services_1 = require("./user.services");
const successResponse_1 = require("../../utils/successResponse");
const createStudentController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        // throw Error("Error From User Controllers");
        const result = yield user_services_1.UserServices.createUserService(data);
        // console.log("result from createStudentController", result);
        (0, successResponse_1.successResponse)(res, {
            statusCode: 200,
            message: "Student Created successfully",
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
});
/////////////////optional task doing below
exports.UserController = { createStudentController };
