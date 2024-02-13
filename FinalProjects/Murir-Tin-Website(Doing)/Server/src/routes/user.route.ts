import express, { Request, Response } from "express";
import { UserController } from "../controllers/user.controller";
const userRoute = express.Router();
userRoute.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "User Data Fetched",
    status: "success",
    data: [
      {
        name: "Rahul Rudra",
        email: "rahul@gmail.com"
      }
    ]
  });
});

userRoute.post("/create-user", UserController.createUserController);
export const UserRoute = userRoute;
