export interface ITour {
  name: string;
  durationHours: number;
  ratingAverage: number;
  ratingQuantity: number;
  price: number;
  imageCover: string;
  images: string[];
  createdAt: Date;
  startLocation: string;
  endlocation: string;
  locations: string[];
  slug: string;
}
