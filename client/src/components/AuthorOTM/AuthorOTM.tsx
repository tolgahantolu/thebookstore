import React from 'react';
import Image from 'next/image';
import { IAuthor, IBook } from '../../../typescript';
import { Book, SectionHeader } from '@/components';

const AuthorOTM: React.FunctionComponent<{ authors: IAuthor[] }> = ({ authors }) => {
  return (
    <div className="mt-20 px-4 xs:px-12 sm:20 md:px-[100px]">
      <SectionHeader
        dataTestID="authorOtmTitle"
        title="author of the month"
        subTitle="and his/her bestsellers"
        additionalInfo={''}
      />

      <div className="mt-6 flex flex-col sm:flex-row justify-between items-start gap-12 w-full">
        {authors.map(
          (author: IAuthor) =>
            author.authorOTM && (
              <>
                <Image
                  src={author.image}
                  alt={`${author.name} author of the month - man - pixabay/elsimage`}
                  //  width={360}
                  //  height={535}
                  fill
                  sizes="(max-width: 768px) 700vw,
              100vw"
                  className="w-auto sm:w-1/3 h-auto object-cover object-top static"
                />

                <div className="sm:w-2/3">
                  <div className="flex flex-col justify-start gap-1">
                    <h2 className="text-2xl font-semibold">{`${author.name} ${author.surname}`}</h2>
                    <p className="text-theme-gray font-extralight">
                      novel prize winner {author.novelPrize}
                    </p>
                    <span className="block w-6 h-[2px] bg-theme-black" />
                  </div>
                  <p className="my-8 font-extralight text-theme-gray">{author.bio}</p>
                  <div className="grid grid-rows-4 xs:grid-rows-2 sm:grid-rows-1 grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2">
                    {author.books.map((book: IBook) => (
                      <Book key={book.title + Math.random()} {...book} />
                    ))}
                  </div>
                </div>
              </>
            ),
        )}
      </div>
    </div>
  );
};

export default AuthorOTM;
