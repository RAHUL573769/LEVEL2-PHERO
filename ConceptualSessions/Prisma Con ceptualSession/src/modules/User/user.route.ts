import express, { Request, Response } from "express";

const router = express.Router();

router.get("/users", (req: Request, res: Response) => {
  console.log("Get Route Working");
});

router.post("/create-users", (req: Request, res: Response) => {
  console.log(req.body);
});
export const userRouter = router;
