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

export interface IAuthor {
  id: string;
  image: string;
  name: string;
  surname: string;
  novelPrize: number;
  bio: string;
  authorOTM: boolean;
  books: IBook[];
}
