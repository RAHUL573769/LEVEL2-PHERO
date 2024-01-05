import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { TErrorResponse } from "./erroraType";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = err.message || "Something Went Wrong From Global Error";
  let error = err;
  let statusCode = err.statusCode || 500;
  console.log(err);

  // if (err && err.name === "ValidationError") {
  //   console.log("Ami Validation Error");
  // } //There is a better way

  const errorResponse: TErrorResponse = {
    statusCode: err.statusCode || 500,
    message: err.message || "Error",
    status: "Fail",
    issues: []
  };
  if (err && err instanceof mongoose.Error.ValidationError) {
    console.log("Ami Validation Error");

    errorResponse.statusCode = 400;
    errorResponse.message = "Validation Error";
    errorResponse.status = "Fail";
    errorResponse.issues = [];
  }

  res.status(errorResponse.statusCode).json({
    message: errorResponse.message,
    status: errorResponse.status,
    error,
    issues: errorResponse.issues
  });
};
