import { NextFunction, Request, Response } from "express";
import { catchAsyncFunction } from "../../utils/catchAsyncFunction";
import { successResponse } from "../../utils/successResponse";
import { AcademicSemesterServices } from "./academicSemesemester.service";
import httpStatus from "http-status";

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
const getAllAcademicSemester = catchAsyncFunction(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemester();

  successResponse(res, {
    statusCode: httpStatus.OK,

    message: "Academic Semester Data are retrieved succesfully",
    data: result
  });
});

const getSingleAcademicSemester = catchAsyncFunction(async (req, res) => {
  const id = req.params.id;
  const result = await AcademicSemesterServices.getSingleAcademicSemester(id);

  successResponse(res, {
    statusCode: httpStatus.OK,

    message: "Single Academic Semester Data is retrieved successfully",
    data: result
  });
});

const deleteAcademicSemester = catchAsyncFunction(async (req, res) => {
  const { studentId } = req.params;
  const result = await AcademicSemesterServices.deleteAcademicSemester(
    studentId
  );

  successResponse(res, {
    statusCode: httpStatus.OK,

    message: "Academic Semester is deleted successfully",
    data: result
  });
});
/////////////////optional task doing below
export const AcademicSemesterController = {
  createAcademicSemesterController,
  getAllAcademicSemester,
  deleteAcademicSemester,
  getSingleAcademicSemester
};
