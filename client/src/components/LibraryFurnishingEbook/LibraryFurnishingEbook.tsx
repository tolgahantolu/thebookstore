import Link from 'next/link';
import React from 'react';

const LibraryFurnishingEbook = () => {
  return (
    <div className="mt-20 px-4 xs:px-12 sm:px-20 md:px-[100px]">
      <div className="grid grid-rows-3 grid-cols-1 sm:grid-rows-1 min-[900px]:grid-cols-3 gap-5 uppercase">
        <Link
          href="/"
          className="col-span-1 row-span-1 min-h-[150px] grid place-items-center gap-1 py-4 text-theme-white bg-bookshelf"
        >
          <h1 data-testid="library" className="text-3xl font-medium">
            library
          </h1>
          <span className="w-2/3 h-px bg-white" />
          <p className="text-xl">reading space</p>
        </Link>
        <Link
          href="/"
          className="col-span-1 row-span-1 grid place-items-center gap-1 py-4 text-theme-white bg-booktable"
        >
          <h1 data-testid="furnishing" className="text-3xl font-medium">
            furnishing
          </h1>
          <span className="w-2/3 h-px bg-white" />
          <p className="text-xl">home furnishment</p>
        </Link>
        <Link
          href="/"
          className="col-span-1 row-span-1 grid place-items-center gap-1 py-4 text-theme-white bg-kindle"
        >
          <h1 data-testid="ebooks" className="text-3xl font-medium">
            ebooks
          </h1>
          <span className="w-2/3 h-px bg-white" />
          <p className="text-xl">reading tools</p>
        </Link>
      </div>
    </div>
  );
};

export default LibraryFurnishingEbook;
