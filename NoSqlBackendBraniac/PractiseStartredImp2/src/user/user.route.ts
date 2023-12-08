import express from "express";
import { StudentController } from "./user.controller";

const router = express.Router();

router.post("/create-student", StudentController.createStudent);

export const UserRoute = router;
