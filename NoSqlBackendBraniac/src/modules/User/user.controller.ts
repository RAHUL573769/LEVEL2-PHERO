import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, student: studentData } = req.body;

    const result = await UserServices.createStudentIntoDb(
      password,
      studentData
    );
    res.status(200).json({
      message: "Data Student is crested "
    });
  } catch (error) {
    res.status(500).json({
      message: "Data Student is  fAILED crested "
    });
  }
};
export const UserController = {
  createStudent
};
