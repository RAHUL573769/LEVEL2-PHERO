import { Request, Response } from "express";
import { UserServices } from "./User.services";

const createUserController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await UserServices.creteUserServices(data);

    res.status(200).json({
      message: "User Created",
      status: "Success",
      data: result
    });
  } catch (error) {
    console.log(error);
  }
};
const getUserController = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUserServices();

    res.status(200).json({
      message: "User Fetched",
      status: "Success",
      data: result
    });
  } catch (error) {
    console.log(error);
  }
};
export const UserController = { createUserController, getUserController };
