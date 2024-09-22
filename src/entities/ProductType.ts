import { ObjectId } from "mongodb";

export interface ProductType {
  _id: ObjectId;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export type Rating = {
  rate: number;
  count: number;
};
