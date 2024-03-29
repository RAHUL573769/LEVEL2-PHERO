import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = "Error From Global Error Handler";
  let error = err.message || "eRROR";
  let statusCode = 404;
  res.status(statusCode).json({
    message: message,
    error
  });
  next();
};
