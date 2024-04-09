/* eslint-disable no-unused-labels */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { TErrorIssues, TErrorSource } from '../../types/types/types';
import { handleZodError } from '../modules/ErrorHandler/handleZodError';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = 'Error From global ' || 'Something went wrong!';
  // console.log(err.name);

  let errorSource: TErrorSource = {
    message: 'This is Error From Error Sources',
    statusCode: 404,
    status: 'Failed',
    issues: [
      {
        path: '',
        message: '',
      },
    ],
  };

  // const handleZodError = (err: ZodError) => {};

  if (err && err instanceof ZodError) {
    errorSource = handleZodError(err);
    // errorSource.message = 'Ami Zod ERROR!!!';
    // errorSource.statusCode = 404;
    // errorSource.status = 'Failed!!!';

    // console.log(err.issues);
  }

  return res.status(errorSource.statusCode).json({
    success: errorSource.status,
    message: errorSource.message,
    issues: errorSource.issues,
  });
};

export default globalErrorHandler;
