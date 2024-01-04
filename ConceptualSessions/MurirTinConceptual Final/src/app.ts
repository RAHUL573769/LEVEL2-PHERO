import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { UserRoutes } from "./routes/user.routes";
import { TourRoutes } from "./routes/tour.route";
import { ReviewRoutes } from "./routes/review.route";
import { notFoundController } from "./controllers/notFount.controller";
import { globalErrorHandler } from "./ErrorHandlingFolder/globalErrrorController";
import { globalRouter } from "./routes/index.route";
import { welcomeRoute } from "./routes/welcomeroute";
const app: Application = express();

app.use(express.json());
app.use(cors());

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
app.use("/api/v1/", globalRouter);

app.use("/", welcomeRoute);
// app.get("/", );
// app.all("*", notFoundController);

//global error handler
app.use(globalErrorHandler);
app.use(notFoundController);

// app.all("*", (req: Request, res: Response, next: NextFunction) => {
//   res.status(404).json({
//     status: "Fail",
//     message: `Route Not Found for ${req.originalUrl}`
//   });
// });

export default app;
