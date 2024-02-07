import { NextFunction, Request, RequestHandler, Response } from "express";

export const catchAsyncFunction = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error: any) => next(error));
  };
};
//higher order function
export const catchAsync1 = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error: any) => next(error));
  };
};
