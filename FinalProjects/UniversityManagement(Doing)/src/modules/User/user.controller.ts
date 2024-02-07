import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.services";
import { successResponse } from "../../utils/successResponse";
import { catchAsyncFunction } from "../../utils/catchAsyncFunction";

const createStudentController = catchAsyncFunction(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("ReqBody", req.body);
      const { password, student: studentData } = req.body;
      // throw Error("Error From User Controllers");
      const result = await UserServices.createStudentService(
        password,
        studentData
      );
      // console.log("result from createStudentController", result);

      successResponse(res, {
        statusCode: 200,
        message: "Student Created successfully",
        data: result
      });
      // res.status(202).json({
      //   message: "Student Created Successfully",
      //   status: "Success",
      //   data: result
      // });
    } catch (error: any) {
      next(error);
    }
  }
);

/////////////////optional task doing below

export const UserController = { createStudentController };
