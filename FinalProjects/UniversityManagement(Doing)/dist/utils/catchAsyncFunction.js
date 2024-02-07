"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsync1 = exports.catchAsyncFunction = void 0;
const catchAsyncFunction = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((error) => next(error));
    };
};
exports.catchAsyncFunction = catchAsyncFunction;
//higher order function
const catchAsync1 = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((error) => next(error));
    };
};
exports.catchAsync1 = catchAsync1;
