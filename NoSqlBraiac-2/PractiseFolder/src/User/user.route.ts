import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { AnyZodObject, ZodSchema } from "zod";
import { UserValidation } from "./user.validations";

const router = express.Router();

const validateUser = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body);
    console.log("11", result);
    if (!result.success) {
      next(result.error);
    } else {
      req.body = result.data;
    }
  };
};

router.post(
  "/create-student",
  //   validateUser(UserValidation.createUserValidation),
  UserController.createUser
);

export const UserRouter = router;
