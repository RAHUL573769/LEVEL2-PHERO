import { NextFunction, Request, Response } from "express";
import { catchAsyncFunction } from "../../utils/catchAsyncFunction";
import { successResponse } from "../../utils/successResponse";
import { AcademicSemesterServices } from "./academicSemesemester.service";

const createAcademicSemesterController = catchAsyncFunction(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("ReqBody", req.body);
      //   const { password, student: studentData } = req.body;
      // throw Error("Error From User Controllers");
      const result = await AcademicSemesterServices.createAcademicSemester(
        req.body
      );
      // console.log("result from createStudentController", result);

      successResponse(res, {
        statusCode: 200,
        message: "AcademicSemester Created successfully",
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
export const AcademicSemesterController = { createAcademicSemesterController };
