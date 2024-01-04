import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = err.message || "Something Went Wrong From Global Error";
  const error = err;
  const statusCoder = err.statusCode || 500;

  res.status(statusCoder).json({
    message,
    status: "Fail",
    error
  });
};
