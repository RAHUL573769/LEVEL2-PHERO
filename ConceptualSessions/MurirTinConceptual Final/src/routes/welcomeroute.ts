import { Request, Response } from "express";

export const welcomeRoute = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Get Route Done",
    status: "Success",
    data: "Welcome To Muir-Tin Website"
  });
};
