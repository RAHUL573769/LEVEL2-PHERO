import express from "express";
import { AcademicSemesterController } from "./academic.semester.controller";
const router = express.Router();

router.get(
  "/get-all-academic-semester",
  AcademicSemesterController.getAllAcademicSemester
);
router.get(
  "/get-single-academic-semester",
  AcademicSemesterController.getSingleAcademicSemester
);
router.patch(
  "/update-single-academic-semester",
  AcademicSemesterController.updateAcademicSemester
);
router.post(
  "/post-single-academic-semester",
  AcademicSemesterController.createAllAcademicSemester
);
export const AcademicSemesterRoute = router;
