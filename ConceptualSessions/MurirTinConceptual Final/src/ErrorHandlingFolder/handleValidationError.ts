import mongoose from "mongoose";
import { IIssue, TErrorResponse } from "./erroraType";

export const handleValidationError = (
  err: mongoose.Error.ValidationError
): TErrorResponse => {
  // let errorResponse: TErrorResponse;

  const issues1: IIssue[] = [];
  const errorValues = Object.values(err.errors);

  errorValues.map((errorObj) => {
    issues1.push({
      path: errorObj.path,
      message: errorObj.message
    });
  });

  return {
    statusCode: 400,
    message: "Validation Error ",
    status: "Fail",
    issues1
  };
};
