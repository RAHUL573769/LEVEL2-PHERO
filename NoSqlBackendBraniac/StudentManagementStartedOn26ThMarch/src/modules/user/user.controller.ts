import { Request, Response } from "express";
import { UserService } from "./user.services";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserService.createIntoDb(password, studentData);

    console.log("From User Controller Line 9", req.body);

    res.status(200).json({
      success: true,
      message: "Student Data is Created",
      data: result
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserControllers = {
  createStudent
};
