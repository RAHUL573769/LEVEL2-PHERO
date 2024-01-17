import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.services";

const createStudentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    const result = await UserServices.createUserService(data);
    console.log("result from createStudentController", result);

    res.status(202).json({
      message: "Student Created Successfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

/////////////////optional task doing below

export const UserController = { createStudentController };
