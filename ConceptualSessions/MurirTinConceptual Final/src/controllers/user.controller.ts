import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import { UserServices } from "../services/user.services";
import { catchAsyncFunction } from "../helpers/catchAsync";

const createUser = catchAsyncFunction(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body;
      const result = await UserServices.createUser(userData);

      console.log(result);
      res.status(200).json({
        message: "User Created Successfully",
        status: "Success",
        data: result
      });
    } catch (error: any) {
      next(error);
    }
  }
);
const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserServices.getAllUser();

    console.log(result);
    res.status(200).json({
      message: "All User Fetched Successfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    // res.status(500).json({
    //   message: error.message || "Something Went Wrong",
    //   status: "Fail"
    // });

    next(error);
  }
};
const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params.id;
    const result = await UserServices.getSingleUser(userId);

    console.log(result);
    res.status(200).json({
      message: "Single User Fetched  Successfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    next(error);
    // res.status(500).json({
    //   message: error.message || "Something Went Wrong",
    //   status: "Fail"
    // });
  }
};
const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const userId = req.params.id;
    const result = await UserServices.updateUser(userId, userData);

    console.log(result);
    res.status(200).json({
      message: "User Updated Successfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    next(error);
    // res.status(500).json({
    //   message: error.message || "Something Went Wrong",
    //   status: "Fail"
    // });
  }
};
const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const result = await UserServices.deleteUser(userId);

    console.log(result);
    res.status(200).json({
      message: "User Deleted Successfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    // res.status(500).json({
    //   message: error.message || "Something Went Wrong",
    //   status: "Fail"
    // });

    next(error);
  }
};
export const UserController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser
};
