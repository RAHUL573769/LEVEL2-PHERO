import e, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response
} from "express";
import mongoose from "mongoose";
import { TErrorResponse } from "../utils/errorType";
import httpStatus from "http-status";

export const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = "Error From Global Error Handler";
  let error = err || "eRROR";
  let statusCode = err.statusCode || 404;
  let status = err.status || "Failed";
  // console.log(err.name);

  const errorResponse: TErrorResponse = {
    message: "Validation Error",
    status: "Failed" || err.status,
    statusCode: httpStatus.NOT_FOUND || err.statusCode,
    issues: err.issues || []
  };

  // if (err && err.name === "ValidationError") {
  //   statusCode = 400;
  //   message = err.message;
  //   status = err.status || "Failed From Validation Error";
  // }

  if (err && err instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    message = err.message;
    status = "Failed From Validation Error";

    const errorValues = Object.values(err.errors);
    // console.log("Error Values", errorValues);

    errorValues.forEach(
      (errorObj: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        errorResponse.issues.push({
          path: errorObj.path,
          message: errorObj.message
        });
      }
    );

    // console.log("Ami Validation Error");
    // console.log(err.errors);
  }
  res.status(errorResponse.statusCode).json({
    message: errorResponse.message,

    status: errorResponse.status,
    issues: errorResponse.issues
  });
};

//pattern-->

//success
//message
// errorSources:[

//   path:"",
// message
// ]
