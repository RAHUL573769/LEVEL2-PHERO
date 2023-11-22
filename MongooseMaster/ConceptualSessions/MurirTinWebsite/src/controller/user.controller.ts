import { Request, Response } from "express";
import User from "../models/user.model";
import { userServices } from "../services/user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    // const result = await User.create(userData);
    const result = await userServices.createUser(userData);
    console.log("Daata Added");
    res.status(201).json({
      message: "User Created",
      status: "success",
      data: result
    });
  } catch (error: any) {
    console.log("Errror Found");
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    // const userData = req.body;
    // const result = await User.create(userData);
    const result = await userServices.getAllUser();
    console.log(result);
    res.status(201).json({
      message: "User Received",
      status: "success",
      data: result
    });
  } catch (error: any) {
    console.log("Errror Found");
  }
};
export const userController = {
  createUser,
  getAllUser
};
