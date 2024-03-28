import { Request, Response } from "express";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
};
