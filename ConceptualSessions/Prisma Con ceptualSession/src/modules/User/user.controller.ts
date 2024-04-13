import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserServices } from "./User.services";

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

// export const catchAsyncFunction = (fn: RequestHandler) => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     Promise.resolve(fn(req, res, next)).catch((err) => {
//       next(err);
//     });
//   };
// };

const createUserController = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await UserServices.creteUserServices(data);

  res.status(200).json({
    message: "User Created",
    status: "Success",
    data: result
  });
});
const getUserController = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getUserServices();

    res.status(200).json({
      message: "User Fetched",
      status: "Success",
      data: result
    });
  } catch (error) {
    console.log(error);
  }
};

const getSearchedUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { data } = req.query;
  console.log(req.query);
  try {
    const result = await UserServices.getSearchService(req.query);

    res.status(200).json({
      message: "User Fetched",
      status: "Success",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
export const UserController = {
  createUserController,
  getUserController,
  getSearchedUserController
};
