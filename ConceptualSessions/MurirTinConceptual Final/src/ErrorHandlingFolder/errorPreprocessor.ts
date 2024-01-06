import mongoose from "mongoose";
import { handleValidationError } from "./handleValidationError";
import { TErrorResponse } from "./erroraType";
import { handleDuplicateError } from "./handleDuplicateError";
import { handleCastError } from "./handleCastError";
import { AppError } from "./Classes/AppError";
import { handleGenericError } from "./handleGenericError";
import { handleZodError } from "./handleZodError";
import { ZodError } from "zod";

export const errorPreprocessor = (err: any): TErrorResponse => {
  let errorResponse: TErrorResponse = {
    statusCode: err.statusCode || 500,
    message: err.message || "Error",
    status: "Fail",
    issues1: err.issues || []
  };
  if (err instanceof ZodError) {
    return handleZodError(err);
  } else if (err && err instanceof mongoose.Error.ValidationError) {
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

    return (errorResponse = handleValidationError(err));
  } else if (err.code && err.code === 11000) {
    return (errorResponse = handleDuplicateError(err));
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

    return (errorResponse = handleCastError(err));
    // errorResponse.message = err.message;
    // errorResponse.status = "Fail";
    // errorResponse.issues1 = [
    //   {
    //     path: "",
    //     message: `Duplicate value for `
    //   }
    // ];
  } else if (err && err instanceof AppError) {
    return (errorResponse = handleGenericError(err));
  } else {
    return (errorResponse = handleGenericError(err));
  }
};
