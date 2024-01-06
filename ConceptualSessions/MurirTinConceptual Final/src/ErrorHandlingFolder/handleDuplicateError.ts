import mongoose from "mongoose";
import { IIssue, TErrorResponse } from "./erroraType";

export const handleDuplicateError = (
  err: mongoose.Error.ValidationError
): TErrorResponse => {
  // let errorResponse: TErrorResponse;
  const regex = /"([^"]*)"/;
  const match = err.message.match(regex);

  // console.log("Value For Regex");

  const issues1: IIssue[] = [
    {
      path: "",
      message: `Duplicate value for ${match![1]}`
    }
  ];
  //   const errorValues = Object.values(err.errors);

  //   errorValues.map((errorObj) => {
  //     issues1.push({
  //       path: errorObj.path,
  //       message: errorObj.message
  //     });
  //   });

  return {
    statusCode: 409,
    message: "Duplication Error Found",
    status: "Fail",
    issues1
  };
};
