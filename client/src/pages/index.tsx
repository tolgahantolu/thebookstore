import React from 'react';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import { Navbar, Header, BestSeller } from '@/components';
import { apolloClient } from '../../graphql/client';
import { GET_BOOKS } from '../../graphql/query';
import { IBook } from '../../typescript';

export const getServerSideProps: GetServerSideProps = async () => {
  const client = apolloClient();

  const { data } = await client.query({ query: GET_BOOKS });

  return {
    props: {
      books: data,
    },
  };
};

export const Home: NextPage<{ books: { getBooks: IBook[] } }> = ({ books: { getBooks } }) => {
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

      <Navbar />
      <Header />
      <BestSeller books={getBooks} />
    </>
  );
};

export default Home;
