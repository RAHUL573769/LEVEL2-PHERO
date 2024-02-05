import { RequestHandler } from "express";
import { catchAsyncFunction } from "../../utils/catchAsyncFunction";
import { successResponse } from "../../utils/successResponse";
import { StudentServices } from "./student.services";
import httpStatus from "http-status";

const getSingleStudent = catchAsyncFunction(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);

  successResponse(res, {
    statusCode: httpStatus.OK,

    message: "Student is retrieved succesfully",
    data: result
  });
});

const getAllStudents: RequestHandler = catchAsyncFunction(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();

  successResponse(res, {
    statusCode: httpStatus.OK,

    message: "Student are retrieved succesfully",
    data: result
  });
});

const deleteStudent = catchAsyncFunction(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);

  successResponse(res, {
    statusCode: httpStatus.OK,

    message: "Student is deleted succesfully",
    data: result
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent
};
