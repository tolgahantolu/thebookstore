import React from 'react';

const Header: React.FC = () => {
  return (
    <div
      data-testid="header-image"
      className="mt-10 relative w-full h-[440px] bg-header-pattern-1 bg-center"
    >
      <div
        data-testid="header-text"
        className="absolute top-1/2 left-4 sm:left-10 md:left-20 bg-theme-white px-4 sm:px-6 py-2 sm:py-3 w-72 h-auto xs:w-auto"
      >
        <q className="text-2xl sm:text-3xl md:text-4xl font-semibold block">
          Today a reader, tomorrow a leader.
        </q>
        <span className="sm:text-sm md:text-base font-normal xs:font-medium italic block xs:text-end mt-3 mr-5">
          - Margaret Fuller
        </span>
      </div>
    </div>
  );
};

export default Header;
