import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { ErrorResponse } from "../../utils/types/ErrorType";

export const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(error.issues);
  // Class---->instance---->Error

  let message = error.message || "Something Wrong";

  let statusCode = error.statusCode || 500;
  let status = error.status || "Error";

  let errorResponse: ErrorResponse = {
    message: "Validation Error",
    statusCode: 400,
    status: "Fail",
    issues: error.issues || []
  };

  if (error instanceof mongoose.Error.ValidationError) {
    message = error.message || "Something Wrong as Validation Error";

    statusCode: 400;
    status = "Error as Validation Error";
    error: error;

    const errorValues = Object.values(error.errors);
    errorValues.map(
      (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        errorResponse.issues.push({
          path: errorObj.path,
          message: errorObj.message
        });
      }
    );
  }
  res.status(errorResponse.statusCode).json({
    message: errorResponse.message,
    status: errorResponse.status,
    issues: errorResponse.issues
  });
  next();
};
