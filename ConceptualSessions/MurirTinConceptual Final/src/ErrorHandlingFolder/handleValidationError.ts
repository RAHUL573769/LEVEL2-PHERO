import mongoose from "mongoose";
import { IIssue, TErrorResponse } from "./erroraType";

export const handleValidationError = (
  err: mongoose.Error.ValidationError
): TErrorResponse => {
  let errorResponse: TErrorResponse;

  const issues: IIssue[] = [];
  const errorValues = Object.values(err.errors);

  errorValues.map((errorObj) => {
    issues.push({
      path: errorObj.path,
      message: errorObj.message
    });
  });

  return {
    statusCode: 400,
    message: "Validation Error Handled",
    status: "Fail",
    issues
  };
};
