import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { AnyZodObject, ZodSchema } from "zod";
import { UserValidation } from "./user.validations";
import { validateUser } from "../middlewares/validate.middlewares";

const router = express.Router();

router.post(
  "/create-student",
  validateUser(UserValidation.createUserValidation),
  UserController.createUser
);

export const UserRouter = router;
