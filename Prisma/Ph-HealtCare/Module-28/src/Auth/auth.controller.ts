import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../helpers/catchAsyncHelpers";
import { AuthServices } from "./auth.services";
import { sendResponse } from "../helpers/successResponse";

const loginUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AuthServices.loginUser(req.body);
    sendResponse(res, {
      statusCode: 202,
      data: result,
      message: "Auth Logeed In",
      success: true
    });
  }
);

export const AuthController = { loginUser };
