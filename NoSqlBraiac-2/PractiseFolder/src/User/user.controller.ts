import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;

    const { password, ...remainingData } = req.body;
    // console.log("19", remainingData);
    const result = await UserServices.createStudent(password, remainingData);
    res.status(200).json({
      message: "User Data Created Successfully",
      status: "success",
      data: result
    });
  } catch (error) {
    console.log("Error is Found while creating User");
    console.log(error);
    // throw new Error(error);
  }
};

export const UserController = { createUser };
