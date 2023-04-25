import React from 'react';
import { FaShippingFast } from 'react-icons/fa';

const Shipping = () => {
  return (
    <div className="mt-20 mx-4 xs:mx-12 sm:mx-20 md:mx-[100px] border-8 border-double">
      <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-5 sm:gap-1 py-6 px-12 xs:px-16 sm:px-20">
        <div className="uppercase text-theme-gray text-center sm:text-left">
          <h1 data-testid="freeShipping" className="text-3xl font-semibold">
            free shipping
          </h1>
          <p data-testid="subFreeShipping" className="mt-3">
            free shipping over $72 for international orders
          </p>
        </div>
        <FaShippingFast size={40} />
      </div>
    </div>
  );
};

export default Shipping;
