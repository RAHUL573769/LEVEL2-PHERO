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
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Something went wrong';
    let status = err.status || 'error';
    // console.log(err.name)
    if (err && err instanceof mongoose_1.default.Error.ValidationError) {
        // console.log('Ami Validation ERROR')
        console.log(err);
        console.log(err);
        statusCode = 400;
        message = err.message || 'Something went wrong';
        status = 'error';
    }
    res.status(statusCode).json({
        status,
        message,
        err,
    });
};
exports.default = globalErrorHandler;
