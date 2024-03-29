"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, req, res, next) => {
    let message = "Error From Global Error Handler";
    let error = err.message;
    let statusCode = 404;
    res.status(statusCode).json({
        message: message,
        error
    });
    next();
};
exports.globalErrorHandler = globalErrorHandler;
