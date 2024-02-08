import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import { AcademicSemesterValidation } from "./academicSemester.validation";
import { zodValidationSchema } from "../../utils/validationMiddleware";

const router = express.Router();

router.post(
  "/create-academic-semester",
  zodValidationSchema(
    AcademicSemesterValidation.createAcademicSemesterValidation
  ),
  AcademicSemesterController.createAcademicSemesterController
);

export const AcademicSemesterRouter = router;
