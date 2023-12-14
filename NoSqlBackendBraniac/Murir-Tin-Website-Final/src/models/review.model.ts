import { Schema, model } from "mongoose";
import { ITour } from "../interface/tour.interface";
import { IReview } from "../interface/review";

const reviewSchema = new Schema<IReview>({
  review: {
    type: String,
    required: [true, "Please tell Your Review"]
  },
  rating: {
    type: Number,
    required: [true, "Please tell Your Ratings"]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: "Tour",
    required: [true, "Please tell Your Tour"]
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please tell Your User Name"]
  }
});
//Pre hook for Query Middle ware

//Pre hook for Query Middle ware
export const Review1 = model<IReview>("Review", reviewSchema);
