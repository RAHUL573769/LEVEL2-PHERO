import mongoose from "mongoose";
import { IIssue, TErrorResponse } from "./erroraType";

export const handleGenericError = (err: Error): TErrorResponse => {
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
    statusCode: 400,
    message: "Unknown Error ",
    status: "Fail",
    issues1
  };
};
