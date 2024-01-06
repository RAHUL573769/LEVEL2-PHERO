import mongoose from "mongoose";
import { IIssue, TErrorResponse } from "./erroraType";
import { AppError } from "./Classes/AppError";

export const handleGenericError = (err: AppError): TErrorResponse => {
  // let errorResponse: TErrorResponse;

  const issues1: IIssue[] = [
    {
      path: "",
      message: err.message
    }
  ];

  // const errorValues=Object.values(err)

  //   const errorValues = Object.values(err.errors);

  //   errorValues.map((errorObj) => {
  //     issues1.push({
  //       path: errorObj.path,
  //       message: errorObj.message
  //     });
  //   });

  return {
    statusCode: err.statusCode,
    message: "App Error ",
    status: "Fail",
    issues1
  };
};
