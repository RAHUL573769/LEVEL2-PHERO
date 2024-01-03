import express from "express";
import { TourController } from "../controllers/tour.controller";

const router = express.Router();

router.post("/create-tour", TourController.createTour);
router.get("/get-tour", TourController.getAllTour);
router.delete("/delete-tour/:id", TourController.deleteTour);
router.get("/get-tour/:id", TourController.getSingleTour);
router.get("/:id/next-schedule", TourController.getNextSchedule);
router.put("/update/:id", TourController.updateTour);

export const TourRoutes = router;
