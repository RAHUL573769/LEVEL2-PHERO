import e, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response
} from "express";

export const globalErrorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message = "Error From Global Error Handler";
  let error = err.message || "eRROR";
  let statusCode = err.statusCode || 404;
  console.log(err);

  res.status(statusCode).json({
    message: message,
    error: error
  });
};

//pattern-->

//success
//message
// errorSources:[

//   path:"",
// message
// ]
