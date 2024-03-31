"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, req, res, next) => {
    let message = "Error From Global Error Handler";
    let error = err.message || "eRROR";
    let statusCode = err.statusCode || 504;
    console.log(err.statusCode);
    res.status(statusCode).json({
        message: message,
        error
    });
    next();
};
exports.globalErrorHandler = globalErrorHandler;
