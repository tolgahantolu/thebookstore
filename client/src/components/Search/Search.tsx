import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { RiShoppingBag2Fill } from 'react-icons/ri';

const Search = () => {
  const [query, setQuery] = useState<string>('');
  const [isInputShow, setIsInputShow] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setQuery(e.target.value.toLowerCase());
  };

  return (
    <form className="flex flex-row items-center gap-5">
      <div
        data-testid="searchIcon"
        onClick={() => setIsInputShow((prevState) => !prevState)}
        className={`${isInputShow && 'hidden'} cursor-pointer`}
      >
        <FaSearch size={25} />
      </div>
      {isInputShow && (
        <div className="relative w-40 h-8">
          <IoCloseSharp
            size={20}
            className="absolute top-[50%] right-2 -translate-y-[50%] cursor-pointer"
            onClick={() => setIsInputShow((prevState) => !prevState)}
          />
          <input
            data-testid="searchInput"
            type="text"
            className="pl-4 pr-8 w-full h-full focus:outline-none"
            placeholder="Search..."
            onChange={handleChange}
            value={query}
          />
        </div>
      )}
      <Link href="/cart" className="relative">
        <RiShoppingBag2Fill size={28} />
        <span className="flex justify-center items-center absolute -top-2 -left-2 text-sm font-semibold bg-theme-white rounded-full w-5 h-5 p-1">
          0
        </span>
      </Link>
    </form>
  );
};

export default Search;
