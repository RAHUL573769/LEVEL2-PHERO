import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.services";

const createStudentIntoController = async (
  req: Request,
  res: Response,
  Next: NextFunction
) => {
  try {
    const data = req.body;
    const result = await StudentServices.createStudent(data);
    res.status(200).json({
      message: "Student Data Send Successfully",
      status: "Success",
      data: result
    });
  } catch (error) {
    console.log(error);
    console.log("Dta Creation Failed");
  }
};

export const StudentController = { createStudentIntoController };
