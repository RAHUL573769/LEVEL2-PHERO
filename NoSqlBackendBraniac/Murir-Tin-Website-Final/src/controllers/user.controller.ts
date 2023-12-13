import { Request, Response } from "express";
import { User } from "../models/user.model";
import { UserServices } from "../services/user.services";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    const result = await UserServices.createUser(userData);

    res.status(200).json({
      message: "User Created Succesfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: "User Creation Failed",
      status: "Failed",
      data: error
    });
  }
};

export const UserController = { createUser };
