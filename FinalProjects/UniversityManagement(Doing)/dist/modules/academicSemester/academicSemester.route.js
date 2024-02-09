"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRouter = void 0;
const express_1 = __importDefault(require("express"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const router = express_1.default.Router();
router.post("/create-academic-semester", 
//   zodValidationSchema(
//     AcademicSemesterValidation.createAcademicSemesterValidation
//   ),
academicSemester_controller_1.AcademicSemesterController.createAcademicSemesterController);
router.get("/get-all-academic-semesters", academicSemester_controller_1.AcademicSemesterController.getAllAcademicSemester);
router.get("/:academicSemesterId", academicSemester_controller_1.AcademicSemesterController.getSingleAcademicSemester);
router.delete("/:academicSemesterId", academicSemester_controller_1.AcademicSemesterController.getSingleAcademicSemester);
exports.AcademicSemesterRouter = router;
