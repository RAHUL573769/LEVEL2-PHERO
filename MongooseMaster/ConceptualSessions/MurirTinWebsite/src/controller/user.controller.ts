import { Request, Response } from "express";
import User from "../models/user.model";

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await User.create(userData);
    res.status(201).json({
      message: "User Created",
      status: "success",
      data: result
    });
  } catch (error: any) {
    console.log("Errror Found");
  }
};

export const userController = {
  createUser
};
