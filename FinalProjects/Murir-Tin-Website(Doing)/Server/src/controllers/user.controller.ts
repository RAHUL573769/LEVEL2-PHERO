import { Request, Response } from "express";
import { UserServices } from "../services/user.services";

const createUserController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const data = await UserServices.createUserIntoDb(userData);
    res.status(200).json({
      message: "User Created Successfully",
      status: "Success",
      data
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

const getAllUserController = async (req: Request, res: Response) => {
  try {
    const data = await UserServices.getUserServices();

    console.log("Data in User Controller", data);
    res.status(200).json({
      message: "All Users Successfully",
      status: "Success",
      data
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserController = {
  createUserController,
  getAllUserController
};
