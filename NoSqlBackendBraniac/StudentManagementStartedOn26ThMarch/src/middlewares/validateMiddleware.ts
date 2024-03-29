import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

export const validateMiddleWare = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //validations

    try {
      const zodParsedData = await schema.parseAsync(req.body);
    } catch (error) {
      next(error);
      console.log(error);
    }
  };
};
