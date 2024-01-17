import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({
    message: "Error From Global Error Handler",
    error: error.message,
    status: "Fail"
  });
  next();
};
