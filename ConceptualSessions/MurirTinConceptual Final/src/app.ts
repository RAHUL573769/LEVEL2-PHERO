import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

app.use(express.json());
app.use(cors());

const userRouter = express.Router();
// app.get("/users", userRouter);
userRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  const users = [
    {
      id: 1,
      name: "Rahul Rudra",
      email: "rahul@gmail.com"
    },
    {
      id: 2,
      name: "Rahuli Rudra",
      email: "rahuli@gmail.com"
    }
  ];

  res.status(200).json({
    message: "User Fetched Successfully",
    status: "Success",
    data: users
  });
  next();
});
app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Get Route Done",
    status: "Success",
    data: "Welcome To Muir-Tin Website"
  });
});

export default app;
