import express, { NextFunction, Request, Response } from "express";
import { UserController } from "./user.controller";
import { verifyToken } from "../../helpers/jwtHelpers";
import config from "../../config";
import { Secret } from "jsonwebtoken";
const userRouter = express.Router();

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      console.log(token);
      if (!token) {
        throw new Error("Yoiu are not verified");
      }
      const verifiedUser = verifyToken(token, "abcd");
      console.log("Verified User", verifiedUser);
      //   console.log(token);
      //   console.log(roles);
    } catch (error) {
      next(error);
    }
  };
};
userRouter.get("/get-user", UserController.createAdminController);
userRouter.post(
  "/create-user",
  auth("ADMIN", "SUPER_ADMIN"),
  UserController.createAdminController
);
export const UserRouter = userRouter;
