import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./routes/user.routes";
import { TourRoutes } from "./routes/tour.route";
import { ReviewRoutes } from "./routes/review.route";
const app: Application = express();

app.use(express.json());
app.use(cors());

const userRouter = express.Router();
// app.get("/users", userRouter);
// userRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
//   const users = [
//     {
//       id: 1,
//       name: "Rahul Rudra",
//       email: "rahul@gmail.com"
//     },
//     {
//       id: 2,
//       name: "Rahuli Rudra",
//       email: "rahuli@gmail.com"
//     }
//   ];

//   res.status(200).json({
//     message: "User Fetched Successfully",
//     status: "Success",
//     data: users
//   });
//   next();
// });
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/tours", TourRoutes);
app.use("/api/v1/reviews", ReviewRoutes);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Get Route Done",
    status: "Success",
    data: "Welcome To Muir-Tin Website"
  });
});

export default app;
