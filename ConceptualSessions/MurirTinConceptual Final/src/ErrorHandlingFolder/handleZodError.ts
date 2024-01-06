import mongoose from "mongoose";
import { IIssue, TErrorResponse } from "./erroraType";
import { ZodError } from "zod";

export const handleZodError = (err: ZodError): TErrorResponse => {
  // let errorResponse: TErrorResponse;
  console.log("Error from Handle Zod", err);

  const issues1: IIssue[] = err.issues.map((issue) => {
    // console.log("issue", issue.path);
    return {
      path: issue.path[issue.path.length - 1] as string,
      message: issue.message
    };
  });
  //   const errorValues = Object.values(err.errors);

  //   errorValues.map((errorObj) => {
  //     issues1.push({
  //       path: errorObj.path,
  //       message: errorObj.message
  //     });
  //   });

  return {
    statusCode: 400,
    message: "Validation Error ",
    status: "Fail",
    issues1
  };
};

// const handlerZodError = (err: ZodError): TErrorResponse => {
//     const issues: TErrorIssue[] = err.issues.map((issue) => {
//       return {
//         path: issue.path[issue.path.length - 1],
//         message: issue.message,
//       }
//     })

//     return {
//       statusCode: 400,
//       status: 'error',
//       message: 'Validation Error',
//       issues,
//     }
//   }
