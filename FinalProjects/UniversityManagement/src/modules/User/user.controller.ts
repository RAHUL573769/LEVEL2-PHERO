import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.services";
import { successResponse } from "../../utils/successResponse";

const createStudentController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    // throw Error("Error From User Controllers");
    const result = await UserServices.createUserService(data);
    // console.log("result from createStudentController", result);

    successResponse(res, {
      statusCode: 200,
      message: "Student Created successfully",
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
};

/////////////////optional task doing below

export const UserController = { createStudentController };
