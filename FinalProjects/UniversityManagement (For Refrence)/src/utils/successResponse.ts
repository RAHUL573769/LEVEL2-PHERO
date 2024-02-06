import { Response } from "express";

type TSuccessResponse<T> = {
  statusCode: number;
  message: string;
  data: T | T[] | null;
};

export const successResponse = <T>(
  res: Response,
  data: TSuccessResponse<T>
) => {
  res.status(data.statusCode).json({
    success: "success",
    message: data.message,
    data: data.data
  });
};
