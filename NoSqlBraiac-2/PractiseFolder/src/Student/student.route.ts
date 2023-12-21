import express from "express";
import { StudentController } from "./student.controller";
const router = express.Router();

router.post("/create-student", StudentController.createStudentIntoController);
router.get("/get-student", StudentController.getAllStudents);

export const StudentRouter = router;
