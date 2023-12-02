export interface ITour {
  name: string;
  durationHours: number;
  ratingAverage: number;
  ratingQuality: number;
  price: number;
  imageCover: string;
  images: string[];
  createdAt: Date;
  startDate: Date[];
  startLocation: string;
  availableSeats: number;
  locations: string[];
  slug: string;
}
