import { Schema, model } from "mongoose";
import { IReview } from "../interface/review.interface";

const reviewSchema = new Schema<IReview>({
  review: {
    type: String
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: "Tour",
    required: [true, "Please Enter Tour "]
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please Enter User "]
  }
});

reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

export const Review = model<IReview>("Review", reviewSchema);
