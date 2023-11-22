import express, { Request, Response } from "express";
import { userRotes } from "./routes/userRouter";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRotes);
app.use("/post", userRotes);
// app.use("/", userRouter.getRoute);

// console.log(process.cwd());

export default app;
