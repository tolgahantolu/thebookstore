import React from 'react';

const BookForm = () => {
  return (
    <div className="group-hover:top-0 transition-all absolute top-0 sm:-top-14 left-0 flex flex-row justify-between items-center bg-theme-light-brown px-1 w-full h-[50px]">
      <input
        data-testid="bookFormInput"
        type="number"
        className="w-2/3 py-1 px-3 focus:outline-none border border-theme-white rounded-2xl placeholder:text-xs placeholder:text-theme-light-brown placeholder:italic"
        placeholder="amount"
      />
      <button
        data-testid="bookFormIcon"
        className="button py-1 px-3 rounded-2xl text-2xl text-white bg-theme-black"
      >
        +
      </button>
    </div>
  );
};

export default BookForm;
