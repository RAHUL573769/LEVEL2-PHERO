import express, { Request, Response } from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/users", (req: Request, res: Response) => {
  console.log("Get Route Working");
});

router.get("/get-users", UserController.getUserController);
router.get("/search-users", UserController.getSearchedUserController);
router.post("/create-users", UserController.createUserController);
export const userRouter = router;
