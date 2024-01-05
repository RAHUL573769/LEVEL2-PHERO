import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { TErrorResponse } from "./erroraType";
import { handleValidationError } from "./handleValidationError";

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

  let errorResponse: TErrorResponse = {
    statusCode: err.statusCode || 500,
    message: err.message || "Error",
    status: "Fail",
    issues: err.issues || []
  };
  if (err && err instanceof mongoose.Error.ValidationError) {
    console.log("Ami Validation Error");

    // errorResponse.statusCode = 400;
    // errorResponse.message = "Validation Error";
    // errorResponse.status = "Fail";
    // errorResponse.issues = [];
    statusCode = 401;
    message: err.message;
    status: "Error";
    err: err;
    // console.log(message);
    // const errorValues = Object.values(err.errors);

    // errorValues.map(
    //   (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
    //     errorResponse.issues.push({
    //       path: errorObj.path,
    //       message: errorObj.message
    //     });
    //   }
    // );

    errorResponse = handleValidationError(err);
  }

  res.status(errorResponse.statusCode).json({
    message: errorResponse.message,
    status: errorResponse.status,
    // error,
    issues: errorResponse.issues
  });
};
