import { NextFunction, Request, Response } from "express";
import { ReviewServices } from "../services/review.services";

const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviewData = req.body;
    const result = await ReviewServices.createReview(reviewData);

    console.log(result);
    res.status(200).json({
      message: "Review Created Successfully",
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
const getAllReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await ReviewServices.getAllReview();

    console.log(result);
    res.status(200).json({
      message: "All Reviews Fetched Successfully",
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
const getSingleReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tourId = req.params.id;
    const result = await ReviewServices.getSingleReview(tourId);

    console.log(result);
    res.status(200).json({
      message: "Single Review Fetched  Successfully",
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
const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviewData = req.body;
    const reviewId = req.params.id;
    const result = await ReviewServices.updateReview(reviewId, reviewData);

    console.log(result);
    res.status(200).json({
      message: "Review Data Updated Successfully",
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
const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tourId = req.params.id;
    const result = await ReviewServices.deleteReview(tourId);

    console.log(result);
    res.status(200).json({
      message: "Revew Data Deleted Successfully",
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
export const ReviewController = {
  createReview,
  getAllReview,
  getSingleReview,
  updateReview,
  deleteReview
};
