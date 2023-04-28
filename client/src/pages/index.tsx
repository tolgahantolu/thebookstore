import React from 'react';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import {
  Navbar,
  Header,
  BestSeller,
  AuthorOTM,
  Shipping,
  LibraryFurnishingEbook,
  Testimonials,
  Footer,
} from '@/components';
import { apolloClient } from '../../graphql/client';
import { GET_AUTHORS, GET_BOOKS, GET_TESTIMONIALS } from '../../graphql/query';
import { IAuthor, IBook, ITestimonials } from '../../typescript';

export const getServerSideProps: GetServerSideProps = async () => {
  const client = apolloClient();

  const { data: books } = await client.query({ query: GET_BOOKS });
  const { data: authors } = await client.query({ query: GET_AUTHORS });
  const { data: testimonials } = await client.query({ query: GET_TESTIMONIALS });

  return {
    props: {
      books,
      authors,
      testimonials,
    },
  };
};

//prettier-ignore
export const Home: NextPage<{
  books: { getBooks: IBook[] };
  authors: { getAuthors: IAuthor[] };
  testimonials: { getTestimonials: ITestimonials[] };
}> = ({ books: { getBooks }, authors: { getAuthors }, testimonials: { getTestimonials } }) => {
  return (
    <>
      <Head>
        <title>The Bookstore</title>
        <meta
          name="description"
          content="The Bookstore e-commerce theme created by Tolgahan Tolu"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>
     
      <Header />
      <BestSeller books={getBooks} />
      <AuthorOTM authors={getAuthors} />
      <Shipping />
      <LibraryFurnishingEbook />
      <Testimonials testimonials={getTestimonials} />
	  <Footer />
    </>
  );
};

export default Home;
