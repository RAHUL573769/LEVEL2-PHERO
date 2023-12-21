import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    console.log(data);
    const result = await UserServices.createUser(data);
    res.status(200).json({
      message: "User Data Created Successfully",
      status: "success",
      data: result
    });
  } catch (error) {
    // console.log("Error is Found while creating User");
    throw new Error(error);
  }
};

export const UserController = { createUser };
