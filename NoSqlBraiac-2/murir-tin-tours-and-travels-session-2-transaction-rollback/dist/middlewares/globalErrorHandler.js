"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (err, req, res, next) => {
    // let statusCode = err.statusCode || 500
    // let message = err.message || 'Something went wrong'
    // let status = err.status || 'error'
    const errorResponse = {
        message: err.message || 'Something went Wrong',
        status: err.status || 'error',
        statusCode: err.statusCode || 500,
        issues: err.issues || [],
    };
    // console.log(err)
    // if (err.name && err.name === 'ValidatorError') {
    //   console.log('Ami Validation Error')
    //   statusCode = 400
    //   message = err.message
    //   status = 'error'
    // }
    // if (err instanceof Error) {
    //   console.log('Ami Validation Error')
    //   statusCode = 400
    //   message = err.message
    //   status = 'error'
    // }
    if (err instanceof mongoose_1.default.Error.ValidationError) {
        // console.log('Ami Validation Error')
        errorResponse.statusCode = 400;
        errorResponse.message = err.message;
        errorResponse.status = 'error';
        const errorValues = Object.values(err.errors);
        errorValues.forEach((errObj) => {
            errorResponse.issues.push({
                path: errObj.path,
                message: errObj.message,
            });
        });
        // console.log(errorValues)
    }
    //step-2
    res.status(errorResponse.statusCode).json({
        message: errorResponse.message,
        // err,
        status: errorResponse.status,
        issues: errorResponse.issues,
    });
};
exports.default = globalErrorHandler;
