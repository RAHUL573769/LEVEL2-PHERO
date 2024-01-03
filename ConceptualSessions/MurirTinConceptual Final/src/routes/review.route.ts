import { ReviewController } from "../controllers/review.controller";
import express from "express";
const router = express.Router();
router.post("/create-review", ReviewController.createReview);
router.get("/get-review", ReviewController.getAllReview);
router.delete("/delete-review/:id", ReviewController.deleteReview);
router.get("/get-review/:id", ReviewController.getSingleReview);
router.put("/update/:id", ReviewController.updateReview);

export const ReviewRoutes = router;
