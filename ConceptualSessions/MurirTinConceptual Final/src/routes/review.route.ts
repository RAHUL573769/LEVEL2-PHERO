import { ReviewController } from "../controllers/review.controller";
import express from "express";
const router = express.Router();
router.post("/create-review", ReviewController.createReview);
router.get("/get-tour", ReviewController.getAllReview);
router.delete("/delete-user/:id", ReviewController.deleteReview);
router.get("/get-user/:id", ReviewController.getSingleReview);
router.put("/update/:id", ReviewController.updateReview);

export const ReviewRoutes = router;
