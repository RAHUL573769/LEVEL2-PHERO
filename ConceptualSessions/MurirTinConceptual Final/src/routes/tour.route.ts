import express from "express";
import { TourController } from "../controllers/tour.controller";

const router = express.Router();

router.post("/create-tour", TourController.createTour);
router.get("/get-tour", TourController.getAllTour);
router.delete("/delete-user/:id", TourController.deleteTour);
router.get("/get-user/:id", TourController.getSingleTour);
router.put("/update/:id", TourController.updateTour);

export const TourRoutes = router;
