import { IReview } from "../interface/review.interface";
import { Review } from "../models/review.model";

const createReview = async (reviewData: IReview): Promise<IReview> => {
  const result = (await Review.create(reviewData)).populate("User"); //instance created

  return result;
};

const getAllReview = async (): Promise<IReview[]> => {
  const result = await Review.find();
  return result;
};

const getSingleReview = async (reviewId: string): Promise<IReview | null> => {
  const result = await Review.findById(reviewId);
  return result;
};

const updateReview = async (
  reviewId: string,
  reviewData: IReview
): Promise<IReview | null> => {
  const result = await Review.findByIdAndUpdate(reviewId, reviewData, {
    new: true,
    runValidators: true
  });
  return result;
};

const deleteReview = async (id: string) => {
  const result = await Review.findByIdAndDelete(id);
  return result;
};
export const ReviewServices = {
  createReview,
  getAllReview,
  getSingleReview,
  updateReview,
  deleteReview
};
