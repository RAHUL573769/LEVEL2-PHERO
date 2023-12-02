import { Schema } from "mongoose";
import { IReview } from "../interface/review.interface";

const reviewSchema = new Schema<IReview>({
  review: {
    type: String
  },
  rating: { type: Number },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: "Tour"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
