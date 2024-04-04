"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentValidations = void 0;
const zod_1 = __importDefault(require("zod"));
const createStudentValidation = () => {
    zod_1.default.object({
        name: zod_1.default.string(),
        durationHours: zod_1.default.number().int().positive(),
        ratingAverage: zod_1.default.number().positive().min(1).max(5)
    });
};
exports.StudentValidations = { createStudentValidation };
