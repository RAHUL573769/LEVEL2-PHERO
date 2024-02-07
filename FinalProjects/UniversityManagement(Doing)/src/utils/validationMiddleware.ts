import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodSchema } from "zod";
import { catchAsyncFunction } from "./catchAsyncFunction";

export const zodValidationSchema = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const validateData = await schema.parseAsync({ body: req.body });
    if (!validateData) {
      next(validateData);
    } else {
      req.body = validateData;
      next();
    }
  };
};
