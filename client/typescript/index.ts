export interface IBook {
  id: string;
  title: string;
  price: number;
  genre: string[];
  bestSeller: boolean;
  featuredImage: string;
  discount: boolean;
  discountPrice: number;
}
