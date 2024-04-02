"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, req, res, next) => {
    let message = "Error From Global Error Handler";
    let error = err.message || "eRROR";
    let statusCode = err.statusCode || 404;
    console.log(err);
    res.status(statusCode).json({
        message: message,
        error: error
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
