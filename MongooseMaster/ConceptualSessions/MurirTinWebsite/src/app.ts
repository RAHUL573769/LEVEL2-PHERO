import express, { Request, Response } from "express";
import userRouter from "./routes/userRouter";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRouter.createUser);
app.use("/", userRouter.getRoute);

// console.log(process.cwd());

export default app;
