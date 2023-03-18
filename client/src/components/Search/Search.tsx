import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';

const Search = () => {
  const [query, setQuery] = useState<string>('');
  const [isInputShow, setIsInputShow] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setQuery(e.target.value.toLowerCase());
  };

  return (
    <form>
      <div
        data-testid="searchIcon"
        onClick={(): void => setIsInputShow((prevState) => !prevState)}
        className={`${isInputShow && 'hidden'} cursor-pointer text-xl sm:text-[26px]`}
      >
        <FaSearch />
      </div>
      {isInputShow && (
        <div className="relative w-40 h-8">
          <IoCloseSharp
            className="absolute top-[50%] right-2 -translate-y-[50%] cursor-pointer text-xl sm:text-2xl"
            onClick={(): void => setIsInputShow((prevState) => !prevState)}
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
    </form>
  );
};

export default Search;
