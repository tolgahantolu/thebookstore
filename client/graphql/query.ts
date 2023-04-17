import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks {
    getBooks {
      id
      title
      genre
      price
      bestSeller
      featuredImage
      discount
      discountPrice
    }
  }
`;
