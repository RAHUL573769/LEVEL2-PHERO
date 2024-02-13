import express, { Application, Request, Response } from "express";
import { UserRoute } from "./routes/user.route";
const app: Application = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
app.use("/users", UserRoute);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome TO murir tin website",
    status: "success"
  });
});

export default app;
