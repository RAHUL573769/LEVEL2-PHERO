import cors from "cors";
import express, { Request, Response } from "express";
import { UserRoute } from "./user/user.route";
import globalHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";
const app = express();

app.use(express.json());
app.use(cors());
app.use(globalHandler);
app.use(notFound);
app.use("/create", UserRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
