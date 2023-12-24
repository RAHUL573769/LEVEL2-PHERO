import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = err.message || "Something is Wrong";
  const status = err.status || "Error";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message,
    status
  });
};
