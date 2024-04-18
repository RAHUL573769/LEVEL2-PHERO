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
exports.AuthController = void 0;
const catchAsyncHelpers_1 = require("../helpers/catchAsyncHelpers");
const auth_services_1 = require("./auth.services");
const successResponse_1 = require("../helpers/successResponse");
const loginUser = (0, catchAsyncHelpers_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_services_1.AuthServices.loginUser(req.body);
    (0, successResponse_1.sendResponse)(res, {
        statusCode: 202,
        data: result,
        message: "Auth Logeed In",
        success: true
    });
}));
exports.AuthController = { loginUser };
