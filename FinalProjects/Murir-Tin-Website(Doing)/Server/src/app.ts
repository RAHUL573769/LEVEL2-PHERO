import express, { Application, Request, Response } from "express";
const app: Application = express();

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
app.use("/all-users", userRoute);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome TO murir tin website",
    status: "success"
  });
});

export default app;
