"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const http_status_1 = __importDefault(require("http-status"));
const handleValidationError_1 = require("../errorHandlers/handleValidationError");
/* eslint-disable @typescript-eslint/no-explicit-any */
const globalErrorHandler = (err, req, res, next) => {
    // let statusCode = err.statusCode || 500
    // let message = err.message || 'Something went wrong'
    // let status = err.status || 'error'
    let errorResponse = {
        message: err.message || 'Something went wrong',
        err: err,
        statusCose: http_status_1.default.NOT_FOUND,
        status: 'There is a Error .Please rectify',
        issues: err.issues || [],
    };
    // console.log(err.name)
    if (err && err instanceof mongoose_1.default.Error.ValidationError) {
        errorResponse = (0, handleValidationError_1.handleValidationError)(err);
        console.log(errorResponse);
        // console.log('Ami Validation ERROR')
        // errorResponse.statusCose = 400
        // errorResponse.message = 'Validation Error'
        // errorResponse.status = 'There is a Error .Please rectify'
        // console.log(errorResponse)
        // const errorValues = Object.values(err.errors)
        // errorValues.forEach(
        //   (errObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        //     errorResponse.issues.push({
        //       path: errObj.path,
        //       message: errObj.message,
        //     })
        //   },
        // )
    }
    res.status(errorResponse.statusCose).json({
        status: errorResponse.status,
        message: errorResponse.message,
        issues: errorResponse.issues,
    });
};
exports.default = globalErrorHandler;