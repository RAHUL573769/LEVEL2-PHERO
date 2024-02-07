import express from "express";
import { UserController } from "./user.controller";
import { zodValidationSchema } from "../../utils/validationMiddleware";
import { UserValidation } from "./user.validations";

const router = express.Router();

router.post(
  "/create-student",
  //   zodValidationSchema(UserValidation.createUserValidation),
  UserController.createStudentController
);

export const UserRouter = router;
