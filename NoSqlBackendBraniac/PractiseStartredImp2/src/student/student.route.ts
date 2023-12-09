import express from "express";
import { StudentController } from "./student.controller";
// import { UserController } from "./user.controller";
// import { StudentController } from "./user.controller";

const router = express.Router();

router.get("/get-all-student", StudentController.getAllStudent);
router.get("/get-single-student", StudentController.getSingleStudent);
router.patch("/update-single-student", StudentController.updateStudent);

export const StudentRoute = router;
