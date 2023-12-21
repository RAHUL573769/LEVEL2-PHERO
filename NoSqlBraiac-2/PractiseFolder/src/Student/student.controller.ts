import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.services";
import { catchAsync } from "../helperFunctions/catchAsyncFunction";

const createStudentIntoController = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const result = await StudentServices.createStudent(data);

      console.log(typeof result);
      res.status(200).json({
        message: "Student Data Send Successfully",
        status: "Success",
        data: result
      });
    } catch (error) {
      console.log(error);
      console.log("Dta Creation Failed");
    }
  }
);

const getAllStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await StudentServices.getAllStudents();

      console.log("DataType of Get All Students", typeof result);
      res.status(200).json({
        message: "Student Data Fetched Successfully",
        status: "Success",
        data: result
      });
    } catch (error) {
      console.log("There is Error");
    }
  }
);

export const StudentController = {
  createStudentIntoController,
  getAllStudents
};
