export interface ITour {
  name: string;
  durationHours: number;
  ratingAverage: number;
  price: number;
  images: string[];
  createdAt: Date[];
  startLocation: string;
  location: string[];

  slug: string;
}
