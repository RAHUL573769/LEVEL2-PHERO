import { NextFunction, Request, RequestHandler, Response } from "express";
import { TourServices } from "../services/tour.service";
import { successResponse1 } from "../helpers/successResponse";
import { catchAsyncFunction } from "../helpers/catchAsync";
import { AppError } from "../ErrorHandlingFolder/Classes/AppError";
import { createTourZodSchema } from "../ZodSchema/zod.schema";

// data={
//   statausCode:200
//   message: "Tour Created Successfully",
//   status: "Success",
//   data: data
// }

// const catchAsyncFunction = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((err) => {
//       next(err);
//     });
//   };
// };

type TResponse<T> = {
  statusCode: number;
  status: "Success";
  message: string;
  data: T | T[] | null;
};
const successResponse = <T>(
  res: Response,
  req: Request,
  data: TResponse<T>
) => {
  res.status(data.statusCode).json({
    message: data.message,
    status: data.data,
    data: data.data
  });
};

const createTour = catchAsyncFunction(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tourData = req.body;
      // console.log("Give Tour Data", tourData);
      const validatedData = createTourZodSchema.parse(tourData);
      console.log("Validated Data", validatedData);

      if (!validatedData) {
        throw new Error("Zod Error");
      }
      const result = await TourServices.createTour(tourData);
      // throw new AppError("Error", 404);
      console.log("Result is", result);
      // res.status(200).json({
      //   message: "Tour Created Successfully",
      //   status: "Success",
      //   data: result
      // });

      successResponse(res, req, {
        statusCode: 201,
        message: "Tour Created Succesfully",
        status: "Success",
        data: result
      });
    } catch (error: any) {
      // console.log("Error from Tour Controller");
      next(error);

      res.status(500).json({
        message: error.message || "Something Went Wrong",
        status: "Fail",
        error: error
      });
    }
  }
);
const getAllTour = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TourServices.getAllTour();

    console.log(result);
    // throw new Error("Error From Get All Tour");

    successResponse1(res, req, {
      statusCode: 201,
      message: "All Tour Fetched Successfully",
      status: "Success",

      data: result
    });
    // res.status(200).json({
    //   status: "Success",
    //   data: result
    // });
  } catch (error: any) {
    next(error);
    // res.status(500).json({
    //   message: error.message || "Something Went Wrong",
    //   status: "Fail"
    // });
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
    next(error);
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
const getNextSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await TourServices.getNextSchedule(id);
    // console.log("From Tour Controller Next Schedule", result);

    res.status(200).json({
      message: "Nearest Date Calculated  Successfully",
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
  deleteTour,
  getNextSchedule
};
