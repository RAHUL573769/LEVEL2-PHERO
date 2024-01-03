import { Schema, model } from "mongoose";
import { IReview, IReviewModel } from "../interface/review.interface";
import mongoose from "mongoose";
import { Tour } from "./tour.model";

const reviewSchema = new Schema<IReview, IReviewModel>({
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
reviewSchema.statics.calcAverageRatings = async function (
  tourId: mongoose.Types.ObjectId
) {
  const stats = await this.aggregate([
    {
      $match: tourId
    },
    {
      $group: {
        _id: "$tour",
        numberOfRatings: {
          $sum: 1
        },
        averageRatings: {
          $avg: "$rating"
        }
      }
    }
  ]);

  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingAverage: stats[0].numberOfRatings,
      ratingQuality: stats[0].averageRatings
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingAverage: 0,
      ratingQuality: 0
    });
  }
};
export const Review = model<IReview, IReviewModel>("Review", reviewSchema);
