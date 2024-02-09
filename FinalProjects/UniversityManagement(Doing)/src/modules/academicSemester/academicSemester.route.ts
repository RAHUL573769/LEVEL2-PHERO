import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";

const router = express.Router();

router.post(
  "/create-academic-semester",
  //   zodValidationSchema(
  //     AcademicSemesterValidation.createAcademicSemesterValidation
  //   ),
  AcademicSemesterController.createAcademicSemesterController
);
router.get(
  "/get-all-academic-semesters",
  AcademicSemesterController.getAllAcademicSemester
);

router.get(
  "/:academicSemesterId",
  AcademicSemesterController.getSingleAcademicSemester
);

router.delete(
  "/:academicSemesterId",
  AcademicSemesterController.getSingleAcademicSemester
);

export const AcademicSemesterRouter = router;
