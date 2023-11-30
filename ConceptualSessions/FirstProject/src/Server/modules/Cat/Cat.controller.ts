import { Request, Response } from "express";
import { catServices } from "./Cat.service";

const createCatController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const catDataAdded = await catServices.addCat(data);
    res.status(500).json({
      success: true,
      message: "Data Added"
    });
    console.log(data);
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something Went Wrong"
    });
  }
};
export const CatController = { createCatController };
