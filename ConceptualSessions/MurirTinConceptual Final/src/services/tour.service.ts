import { ITour } from "../interface/tour.interface";
import { Tour } from "../models/tour.model";

const createTour = async (tourData: ITour): Promise<ITour> => {
  const result = await Tour.create(tourData); //instance created

  return result;
};

const getAllTour = async (): Promise<ITour[]> => {
  const result = await Tour.find();
  return result;
};

const getSingleTour = async (tourId: string): Promise<ITour | null> => {
  const result = await Tour.findById(tourId);
  return result;
};

const updateTour = async (
  tourId: string,
  tourData: ITour
): Promise<ITour | null> => {
  const result = await Tour.findByIdAndUpdate(tourId, tourData, {
    new: true,
    runValidators: true
  });
  return result;
};

const deleteTour = async (id: string) => {
  const result = await Tour.findByIdAndDelete(id);
  return result;
};
export const TourServices = {
  createTour,
  getAllTour,
  getSingleTour,
  updateTour,
  deleteTour
};
