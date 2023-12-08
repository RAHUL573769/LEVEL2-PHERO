import cors from "cors";
import express, { Request, Response } from "express";
import { UserRoute } from "./user/user.route";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/create", UserRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
