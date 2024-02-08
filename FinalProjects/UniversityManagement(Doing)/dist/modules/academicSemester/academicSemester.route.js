"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRouter = void 0;
const express_1 = __importDefault(require("express"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const academicSemester_validation_1 = require("./academicSemester.validation");
const validationMiddleware_1 = require("../../utils/validationMiddleware");
const router = express_1.default.Router();
router.post("/create-academic-semester", (0, validationMiddleware_1.zodValidationSchema)(academicSemester_validation_1.AcademicSemesterValidation.createAcademicSemesterValidation), academicSemester_controller_1.AcademicSemesterController.createAcademicSemesterController);
exports.AcademicSemesterRouter = router;
