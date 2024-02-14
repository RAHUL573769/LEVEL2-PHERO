import { Request, Response } from "express";
import { CatServices } from "../services/cat.service";

const createCatController = async (req: Request, res: Response) => {
  try {
    const { ...data } = req.body;

    console.log(data);
    const result = await CatServices.createCat(data);
    res.status(200).json({
      message: "Cat Data Created Successfully",
      status: "Success",
      data: result
    });
  } catch (error) {}
};

export const CatController = { createCatController };
