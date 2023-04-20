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
      author
    }
  }
`;

export const GET_AUTHORS = gql`
  query GetAuthors {
    getAuthors {
      id
      image
      name
      surname
      novelPrize
      bio
      authorOTM
      books {
        title
        genre
        price
        bestSeller
        featuredImage
        discount
        discountPrice
        author
      }
    }
  }
`;
