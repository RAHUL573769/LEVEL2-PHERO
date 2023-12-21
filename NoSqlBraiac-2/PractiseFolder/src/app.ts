import express, { Request, Response } from "express";
import cors from "cors";
import { UserRouter } from "./User/user.route";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", UserRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
