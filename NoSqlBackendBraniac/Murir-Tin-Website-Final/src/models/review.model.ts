import { Schema, model } from "mongoose";
import { IReview } from "../interface/review";

const reviewSchema = new Schema<IReview>({
  review: {
    type: String
  },
  rating: {
    type: Number
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: "Tour",
    unique: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now()
  }
});
//Pre hook for Query Middle ware

//Pre hook for Query Middle ware
export const Review = model<IReview>("Review", reviewSchema);
