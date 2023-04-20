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

      <div className="mt-6 flex flex-row justify-between items-start gap-12">
        {authors.map((author: IAuthor) => {
          return (
            author.authorOTM && (
              <>
                <Image
                  src={author.image}
                  alt={`${author.name} author of the month - man - pixabay/elsimage`}
                  width={360}
                  height={535}
                  className="w-auto h-auto object-cover object-top"
                />

                <div>
                  <div className="flex flex-col justify-start gap-1">
                    <h2 className="text-2xl font-semibold">{`${author.name} ${author.surname}`}</h2>
                    <p className="text-theme-gray font-extralight">
                      novel prize winner {author.novelPrize}
                    </p>
                    <span className="block w-6 h-[2px] bg-theme-black" />
                  </div>
                  <p className="my-8 font-extralight text-theme-gray">{author.bio}</p>
                  <div className="flex gap-2">
                    {author.books.map((book: IBook) => (
                      <Book key={book.title + Math.random()} {...book} />
                    ))}
                  </div>
                </div>
              </>
            )
          );
        })}
      </div>
    </div>
  );
};

export default AuthorOTM;
