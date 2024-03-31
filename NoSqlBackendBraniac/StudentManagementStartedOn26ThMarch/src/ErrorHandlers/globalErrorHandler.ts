import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = "Error From Global Error Handler";
  let error = err.message || "eRROR";
  let statusCode = err.statusCode || 504;
  console.log(err.statusCode);
  res.status(statusCode).json({
    message: message,
    error
  });
  next();
};
