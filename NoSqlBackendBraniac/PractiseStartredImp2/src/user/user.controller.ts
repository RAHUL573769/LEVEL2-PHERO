import { Request, Response } from "express";
import { UserServices } from "./user.services";

const createStudent = async (req: Request, res: Response) => {
  try {
    // const {
    //   password,
    //   student: { studentData }
    // } = req.body;
    // const { student } = req.body.student;
    const {
      password,
      student: { ...studentData }
    } = req.body;
    console.log("15", studentData);

    const result = await UserServices.createStudentIntoDb(
      password,
      studentData
    );
    // res.status(202).json({
    //   message: "User Data Added Successfully",
    //   success: true,
    //   data: result
    // });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent
};
