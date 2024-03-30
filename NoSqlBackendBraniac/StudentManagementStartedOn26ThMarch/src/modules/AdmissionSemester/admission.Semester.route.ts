import express from "express";
import { AcademicSemesterControllers } from "./admission.Semester.controller";
import { validateMiddleWare } from "../../middlewares/validateMiddleware";
import { AcademicSemesterValidation } from "./admission.Semester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateMiddleWare(
    AcademicSemesterValidation.createAcademicSemesterValidation
  ),
  AcademicSemesterControllers.createAcademicSemester
);
// router.get("/:semesterIdId", StudentControllers.getSingleStudent);

// router.delete("/:semesterIdId", StudentControllers.deleteStudent);

// router.get("/", StudentControllers.getAllStudents);

export const AcademicSemesterRoutes = router;
