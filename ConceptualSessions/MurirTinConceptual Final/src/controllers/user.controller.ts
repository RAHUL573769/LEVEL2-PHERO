import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await User.create(userData);
    res.status(200).json({
      message: "User Created Successfully",
      status: "Success",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message || "Something Went Wrong",
      status: "Fail"
    });
  }
};
