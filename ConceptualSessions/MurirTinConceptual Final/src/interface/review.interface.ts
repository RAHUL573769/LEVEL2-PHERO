import mongoose, { Model, Schema } from "mongoose";

export interface IReview {
  review: string;
  rating: number;
  createdAt: Date;
  user: Schema.Types.ObjectId;
  tour: Schema.Types.ObjectId;
}

//static methods
export interface IReviewModel extends Model<IReview> {
  calcAverageRatings(tourId: Schema.Types.ObjectId): Promise<void>;
}
