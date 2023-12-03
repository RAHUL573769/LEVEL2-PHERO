import { NextFunction, Request, RequestHandler, Response } from "express";
import { StudentServices } from "./student.service";

// const catchAsync = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((err) => console.log(err));
//   };
// };

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => console.log(err));
  };
};

const getStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { studentId } = req.params;
      const result = await StudentServices.getSingleStudentFromDb(studentId);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Student is retrieved succesfully",
        data: result
      });
    } catch (error) {
      console.log(error);
    }
  }
);

const getAllStudents = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await StudentServices.getAllStudentsFromDb();
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: "All Student is retrieved succesfully",
        data: result
      });
    } catch (err) {
      next(err);
    }
  }
);

const deleteStudent = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { studentId } = req.params;
      const result = await StudentServices.deleteDataFromDb(studentId);
      res.status(200).json({
        statusCode: 200,
        success: true,
        message: "Student is Deleted succesfully",
        data: result
      });
    } catch (err) {
      next(err);
    }
  }
);

export const studentController = {
  getStudents,
  getAllStudents,
  deleteStudent
};
