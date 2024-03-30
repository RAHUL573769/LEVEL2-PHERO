import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { successResponse1 } from "../../utils/sendRespons";
import httpStatus from "http-status";
import { AcademicSemesterServices } from "./admission.Semester.services";

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AcademicSemesterServices.createAcademicSemesterintoDb(
      req.body
    );
    successResponse1(res, {
      message: "AcademicSemester Created Successfully",
      statusCode: httpStatus.CREATED,
      data: result,
      status: "Success"
    });
  }
);

export const AcademicSemesterControllers = {
  createAcademicSemester
};
