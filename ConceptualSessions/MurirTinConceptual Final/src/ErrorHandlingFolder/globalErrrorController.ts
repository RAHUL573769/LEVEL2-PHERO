import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { TErrorResponse } from "./erroraType";
import { handleValidationError } from "./handleValidationError";
import { handleDuplicateError } from "./handleDuplicateError";
import { handleCastError } from "./handleCastError";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = err.message || "Something Went Wrong From Global Error";
  let error = err;
  let statusCode = err.statusCode || 500;
  // console.log(err);

  // if (err && err.name === "ValidationError") {
  //   console.log("Ami Validation Error");
  // } //There is a better way

  let errorResponse: TErrorResponse = {
    statusCode: err.statusCode || 500,
    message: err.message || "Error",
    status: "Fail",
    issues1: err.issues || []
  };
  if (err && err instanceof mongoose.Error.ValidationError) {
    console.log("Ami Validation Error");

    // errorResponse.statusCode = 400;
    // errorResponse.message = "Validation Error";
    // errorResponse.status = "Fail";
    // errorResponse.issues = [];
    // statusCode = 401;
    // message: err.message;
    // status: "Error";
    // err: err;
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
  } else if (err.code && err.code === 11000) {
    errorResponse = handleDuplicateError(err);
    // console.log(err.message);
    // errorResponse.message = err.message;
    // errorResponse.status = "Fail";
    // errorResponse.issues1 = [
    //   {
    //     path: "",
    //     message: `Duplicate value for ${match[0]}`
    //   }
    // ];
  } else if (err && err instanceof mongoose.Error.CastError) {
    console.log("Cast Error");

    errorResponse = handleCastError(err);
    // errorResponse.message = err.message;
    // errorResponse.status = "Fail";
    // errorResponse.issues1 = [
    //   {
    //     path: "",
    //     message: `Duplicate value for `
    //   }
    // ];
  }
  console.log(err);
  res.status(errorResponse.statusCode).json({
    message: errorResponse.message,
    status: errorResponse.status,
    // error,
    issues: errorResponse.issues1
  });
};
