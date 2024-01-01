import { NextFunction, Request, Response } from "express";
import { TourServices } from "../services/tour.service";

const createTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tourData = req.body;
    const result = await TourServices.createTour(tourData);

    console.log(result);
    res.status(200).json({
      message: "Tour Created Successfully",
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
const getAllTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TourServices.getAllTour();

    console.log(result);
    res.status(200).json({
      message: "All Tour Fetched Successfully",
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
const getSingleTour = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tourId = req.params.id;
    const result = await TourServices.getSingleTour(tourId);

    console.log(result);
    res.status(200).json({
      message: "Single Tour Fetched  Successfully",
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
const updateTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tourData = req.body;
    const tourId = req.params.id;
    const result = await TourServices.updateTour(tourId, tourData);

    console.log(result);
    res.status(200).json({
      message: "Tour Data Updated Successfully",
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
const deleteTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tourId = req.params.id;
    const result = await TourServices.deleteTour(tourId);

    console.log(result);
    res.status(200).json({
      message: "Tour Data Deleted Successfully",
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
export const TourController = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour
};
