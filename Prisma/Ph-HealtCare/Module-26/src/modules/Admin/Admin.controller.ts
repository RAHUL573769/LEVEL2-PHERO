import { Request, Response } from "express";
import { AdminServices } from "./Admin.services";

const getAdminController = async (req: Request, res: Response) => {
  const query = req.query;
  console.log(query);
  const result = await AdminServices.getAllFromDb(query);
  try {
    res.status(200).json({
      success: true,
      data: result,
      message: "Admin Data Fetched Successfully"
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      data: error,
      message: "Some Error Found"
    });
  }
};

export const AdminController = { getAdminController };
