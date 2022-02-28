import { ICategory } from "./interface.category";
export interface IProduct {
  name: string;
  description: string;
  rickDescription: string;
  image: string;
  images: string[];
  brand: string;
  price: number;
  category: ICategory;
  inStock: number;
  rating: number;
  isFeatured: boolean;
  dateCreated: Date;
  status: boolean;
}
