import React from 'react';
import { SiUps, SiFedex, SiVisa } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="mt-20 px-4 xs:px-12 sm:px-20 md:px-[100px] text-theme-gray flex flex-col xs:flex-row justify-center xs:justify-between items-center gap-2 xs:gap-0 pb-5">
      <p data-testid="copyright" className="text-base">
        Demo 2023 © Tolgahan Tolu.
      </p>
      <div className="flex items-center justify-end gap-2">
        <span className="text-3xl hover:text-theme-black transition">
          <SiUps />
        </span>
        <span className="text-5xl hover:text-theme-black transition">
          <SiFedex />
        </span>
        <span className="text-5xl hover:text-theme-black transition">
          <SiVisa />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
