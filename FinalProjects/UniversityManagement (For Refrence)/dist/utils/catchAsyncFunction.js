"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsyncFunction = void 0;
const catchAsyncFunction = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((error) => next(error));
    };
};
exports.catchAsyncFunction = catchAsyncFunction;
