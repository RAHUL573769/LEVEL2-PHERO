import express from "express";
import { UserController } from "../controllers/user.controller";
const router = express.Router();

router.post("/create-user", UserController.createUser);
router.get("/get-user", UserController.getAllUser);
router.delete("/delete-user/:id", UserController.deleteUser);
router.get("/get-user/:id", UserController.getSingleUser);
router.put("/update/:id", UserController.updateUser);

export const UserRoutes = router;
