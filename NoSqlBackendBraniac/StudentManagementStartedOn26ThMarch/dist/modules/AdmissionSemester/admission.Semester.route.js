"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admission_Semester_controller_1 = require("./admission.Semester.controller");
const validateMiddleware_1 = require("../../middlewares/validateMiddleware");
const admission_Semester_validation_1 = require("./admission.Semester.validation");
const router = express_1.default.Router();
router.post("/create-academic-semester", (0, validateMiddleware_1.validateMiddleWare)(admission_Semester_validation_1.AcademicSemesterValidation.createAcademicSemesterValidation), admission_Semester_controller_1.AcademicSemesterControllers.createAcademicSemester);
router.get("/", admission_Semester_controller_1.AcademicSemesterControllers.getAllAcademicSemester);
router.patch("/:semesterIdId", admission_Semester_controller_1.AcademicSemesterControllers.updateAcademicSemester);
router.get("/:id", admission_Semester_controller_1.AcademicSemesterControllers.getSingleAcademicSemester);
exports.AcademicSemesterRoutes = router;
