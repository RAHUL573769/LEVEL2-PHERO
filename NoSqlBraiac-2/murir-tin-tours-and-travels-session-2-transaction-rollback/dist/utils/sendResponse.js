"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newSuccessResponse = void 0;
const newSuccessResponse = (res, data) => {
    res.status(data.statusCode).json({
        message: data.message,
        status: data.status,
        data: data.data
    });
};
exports.newSuccessResponse = newSuccessResponse;
//jei data ashbe shei datar type
const sendSuccessResponse = (res, data) => {
    res.status(data.statusCode).json({
        status: 'success',
        message: data.message,
        data: data.data,
    });
};
exports.default = sendSuccessResponse;
