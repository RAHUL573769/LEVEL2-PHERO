import express, { Request, Response } from "express";
import userRouter from "./routes/userRouter";

const app = express();
app.use("/", userRouter.getRoute);

// console.log(process.cwd());

export default app;
