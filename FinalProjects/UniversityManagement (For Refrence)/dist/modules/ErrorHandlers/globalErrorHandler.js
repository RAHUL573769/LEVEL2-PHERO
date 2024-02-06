"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const globalErrorHandler = (error, req, res, next) => {
    // console.log(error.issues);
    // Class---->instance---->Error
    let message = error.message || "Something Wrong";
    let statusCode = error.statusCode || 500;
    let status = error.status || "Error";
    let errorResponse = {
        message: "Validation Error",
        statusCode: 400,
        status: "Fail",
        issues: error.issues || []
    };
    if (error instanceof mongoose_1.default.Error.ValidationError) {
        message = error.message || "Something Wrong as Validation Error";
        statusCode: 400;
        status = "Error as Validation Error";
        error: error;
        const errorValues = Object.values(error.errors);
        errorValues.map((errorObj) => {
            errorResponse.issues.push({
                path: errorObj.path,
                message: errorObj.message
            });
        });
    }
    res.status(errorResponse.statusCode).json({
        message: errorResponse.message,
        status: errorResponse.status,
        issues: errorResponse.issues
    });
    next();
};
exports.globalErrorHandler = globalErrorHandler;
