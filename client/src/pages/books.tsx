import { Book, SectionHeader } from '@/components';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { apolloClient } from '../../graphql/client';
import { GET_BOOKS } from '../../graphql/query';
import { IBook } from '../../typescript';
import Image from 'next/image';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async () => {
  const client = apolloClient();

  const { data: books } = await client.query({ query: GET_BOOKS });

  return {
    props: {
      books,
    },
  };
};

const Books: NextPage<{ books: { getBooks: IBook[] } }> = ({ books: { getBooks } }) => {
  console.log(getBooks);
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
        <div className="flex flex-col xs:flex-row justify-between">
          <div>
            <SectionHeader
              dataTestID="booksHeader"
              title="books"
              subTitle={`showing 1-5 of ${getBooks.length} results`}
              additionalInfo={''}
            />
          </div>

          <select className="self-end capitalize px-2 mt-2 xs:mt-0 h-10 w-full xs:w-48 sm:w-56 text-theme-gray border border-theme-gray focus:outline-none">
            <option value="default">default sorting</option>
            <option value="low to high">low to high price</option>
            <option value="high to low">high to low price</option>
          </select>
        </div>

        <div className="mt-6 w-full flex flex-col-reverse sm:flex-row items-start gap-5">
          <div className="flex-1 w-full flex flex-col gap-10">
            <div className="p-4 w-full flex flex-col items-center gap-4 border border-theme-gray">
              <h3 className="text-xl">bestsellers</h3>
              <div className="w-full border-t-4 border-double border-theme-gray">
                <Link href="/" className="w-full flex items-center gap-2 mt-4">
                  {/* product */}
                  <Image
                    src={
                      'https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/book-5.jpg?alt=media&token=02902745-2d6f-4fc0-badb-fbe49205b2e6'
                    }
                    alt={'the silent history'}
                    width={45}
                    height={45}
                  />
                  <div className="">
                    <h4 className="font-medium">the silent history</h4>
                    <p>$28</p>
                  </div>
                </Link>
                <Link href="/" className="flex items-center gap-2 mt-4">
                  {/* product */}
                  <Image
                    src={
                      'https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/book-5.jpg?alt=media&token=02902745-2d6f-4fc0-badb-fbe49205b2e6'
                    }
                    alt={'the silent history'}
                    width={45}
                    height={45}
                  />
                  <div className="">
                    <h4 className="font-medium">the silent history</h4>
                    <p>$28</p>
                  </div>
                </Link>

                {/*{getBooks.map((book: IBook) => {
                  return book.bestSeller && <Book key={book.id} {...book} />;
                })}*/}
              </div>
            </div>

            <div className="p-4 w-full flex flex-col items-center gap-4 border border-theme-gray">
              <h3 className="text-xl">book genres</h3>
              <div className="border-t-4 w-full border-double border-theme-gray">
                <Link href="history" className="w-full inline-block mt-4">
                  history
                </Link>
                <Link href="fantasy" className="w-full inline-block mt-4">
                  fantasy
                </Link>
                <Link href="romance" className="w-full inline-block mt-4">
                  romance
                </Link>
                <Link href="literature" className="w-full inline-block mt-4">
                  literature
                </Link>
                <Link href="healthy" className="w-full inline-block mt-4">
                  healthy
                </Link>
                <Link href="business" className="w-full inline-block mt-4">
                  business
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-[2] md:flex-[4] w-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-2">
              {getBooks.map((book: IBook) => (
                <Book key={book.id} {...book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
