"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRoutes = void 0;
const validateMiddleware_1 = require("../../middlewares/validateMiddleware");
const academic_faculty_controller_1 = require("./academic.faculty.controller");
const academic_faculty_validation_1 = require("./academic.faculty.validation");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/create-academic-faculty", (0, validateMiddleware_1.validateMiddleWare)(academic_faculty_validation_1.AcademicFacultyValidation.createAcademicFacultyValidation), academic_faculty_controller_1.AcademicFacultyControllers.createAcademicFaculty);
router.get("/", academic_faculty_controller_1.AcademicFacultyControllers.getAllAcademicFaculty);
router.patch("/:semesterIdId", academic_faculty_controller_1.AcademicFacultyControllers.updateAcademicFaculty);
router.get("/:id", academic_faculty_controller_1.AcademicFacultyControllers.getSingleAcademicFaculty);
exports.AcademicFacultyRoutes = router;
