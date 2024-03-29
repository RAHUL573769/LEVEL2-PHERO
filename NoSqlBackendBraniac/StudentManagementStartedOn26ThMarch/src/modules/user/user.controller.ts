import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.services";
import { successResponse1 } from "../../utils/sendRespons";
import httpStatus from "http-status";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserService.createIntoDb(password, studentData);

    console.log("From User Controller Line 9", req.body);

    successResponse1(res, {
      message: "Student Data Created Succesfully",
      statusCode: httpStatus.CREATED,
      data: result,
      status: "Success"
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent
};
