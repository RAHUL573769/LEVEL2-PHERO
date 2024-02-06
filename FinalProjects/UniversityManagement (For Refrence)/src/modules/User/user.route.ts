import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/create-student", UserController.createStudentController);

export const UserRouter = router;
