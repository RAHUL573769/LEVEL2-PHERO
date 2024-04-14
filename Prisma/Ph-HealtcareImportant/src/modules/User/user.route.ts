import express, { Request, Response } from "express";

const userRouter = express.Router();

userRouter.get("/users", (req: Request, res: Response) => {
  res.status(202).json({
    message: "UserRoute wORKING"
  });
});
export const UserRouter = userRouter;
