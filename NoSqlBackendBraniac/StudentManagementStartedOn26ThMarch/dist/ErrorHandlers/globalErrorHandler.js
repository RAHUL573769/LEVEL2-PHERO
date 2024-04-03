"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (err, req, res, next) => {
    let message = "Error From Global Error Handler";
    let error = err || "eRROR";
    let statusCode = err.statusCode || 404;
    let status = err.status || "Failed";
    // console.log(err.name);
    const errorResponse = {
        message: "Validation Error",
        status: "Failed" || err.status,
        statusCode: http_status_1.default.NOT_FOUND || err.statusCode,
        issues: err.issues || []
    };
    // if (err && err.name === "ValidationError") {
    //   statusCode = 400;
    //   message = err.message;
    //   status = err.status || "Failed From Validation Error";
    // }
    if (err && err instanceof mongoose_1.default.Error.ValidationError) {
        statusCode = 400;
        message = err.message;
        status = "Failed From Validation Error";
        const errorValues = Object.values(err.errors);
        // console.log("Error Values", errorValues);
        errorValues.forEach((errorObj) => {
            errorResponse.issues.push({
                path: errorObj.path,
                message: errorObj.message
            });
        });
        // console.log("Ami Validation Error");
        // console.log(err.errors);
    }
    res.status(errorResponse.statusCode).json({
        message: errorResponse.message,
        status: errorResponse.status,
        issues: errorResponse.issues
    });
};
exports.globalErrorHandler = globalErrorHandler;
//pattern-->
//success
//message
// errorSources:[
//   path:"",
// message
// ]
