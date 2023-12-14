import express from "express";
import { ReviewController } from "../controllers/reeview.controller";

const router = express.Router();
router.get("/get-review", ReviewController.getAllReview);

router.post("/create-tour", ReviewController.createReview);
router.get("/get-user/:id", ReviewController.getSingleReview);
router.patch("/update-user/:id", ReviewController.updateReview);

export const ReviewRouter = router;
