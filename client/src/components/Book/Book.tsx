import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IBook } from '../../../typescript';
import { BookForm } from '../../components';

//const Book: React.FunctionComponent<{ book: IBook }> = (book) => {
const Book: React.FunctionComponent<IBook> = (bookDetails) => {
  console.log(bookDetails);
  return (
    <div className="group relative overflow-hidden flex justify-center col-span-1 row-span-1 bg-white pt-1 px-2 pb-3 rounded-xl">
      <Link href={`book/${bookDetails.title}`}>
        <Image src={bookDetails.featuredImage} alt={bookDetails.title} width={232} height={300} />
        <div className="">
          <h2 className="text-xl font-medium">{bookDetails.title}</h2>
          <p className="mt-1 font-thin">
            {bookDetails.genre.map((genre: string) => genre).join(', ')}
          </p>
          {bookDetails.discount ? (
            <p className="mt-2 flex flex-row items-center justify-start gap-3">
              <span className="line-through	text-lg opacity-80">${bookDetails.price}</span>
              <span className="text-xl">${bookDetails.discountPrice}</span>
            </p>
          ) : (
            <p data-testid="price" className="mt-2 text-xl">
              ${bookDetails.price}
            </p>
          )}
        </div>
      </Link>
      <BookForm />
    </div>
  );
};

export default Book;
