import { NextFunction, Request, Response } from "express";

export const notFoundController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({
    status: "Fail",
    message: `Route Not Found for ${req.originalUrl}`
  });
};
