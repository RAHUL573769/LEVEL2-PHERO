"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (error, req, res, next) => {
    res.status(404).json({
        message: "Error From Global Error",
        status: "Failed"
    });
};
exports.globalErrorHandler = globalErrorHandler;
