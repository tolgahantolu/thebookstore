import { SectionHeader } from '@/components';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Books: NextPage = () => {
  return (
    <>
      <Head>
        <title>Books</title>
        <meta
          name="description"
          content="The Bookstore e-commerce theme created by Tolgahan Tolu"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>

      <div className="mt-10 px-4 xs:px-12 sm:px-20 md:px-[100px]">
        <SectionHeader
          dataTestID="booksHeader"
          title="books"
          subTitle="showing 1-10 of 12 results"
          additionalInfo={''}
        />
      </div>
    </>
  );
};

export default Books;
