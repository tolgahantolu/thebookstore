import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from '../Search/Search';
import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import { IoCloseSharp } from 'react-icons/io5';

const MENU_LIST = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'books',
    path: '/books',
  },
  {
    name: 'library',
    path: '/library',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const Navbar = () => {
  const [isNavbarShow, setIsNavbarShow] = useState<boolean>(false);
  const router = useRouter();

  return (
    <nav className="px-4 xs:px-12 sm:20 md:px-[100px] bg-theme-dark-brown w-full h-20 flex flex-row justify-between items-center">
      <Link href="/" className="flex flex-row items-center justify-start gap-2">
        <Image
          src="/logo.png"
          alt="the bookstore"
          width={35}
          height={10}
          className="w-auto h-auto"
        />
        <h1 data-testid="logo" className="flex flex-col justify-center items-start">
          <span className="text-sm">the</span>{' '}
          <span className="text-lg font-semibold -mt-1"> bookstore </span>
        </h1>
      </Link>

      <ul
        className={`${
          isNavbarShow ? 'navbar sm:flex' : 'hidden sm:flex'
        } z-10 absolute top-[100px] py-4 right-4 xs:right-12 sm:static bg-inherit flex-1 ml-0 sm:ml-12 w-[120px] rounded-xl font-medium flex flex-col sm:flex-row justify-start items-center gap-5`}
      >
        {MENU_LIST.map((item: { name: string; path: string }, i: React.Key) => (
          <li
            key={i}
            className={`${
              router.pathname == item.path && 'active'
            } text-base sm:text-lg transition transition-500 hover:-translate-y-[3px] hover:text-theme-white`}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex-1 sm:flex-none mr-5 sm:mr-0 flex flex-row items-center justify-end gap-3">
        <Search />
        <Link href="/cart" className="relative">
          <span className="text-xl sm:text-[26px]">
            <RiShoppingBag2Fill />
          </span>
          <span className="flex justify-center items-center absolute -top-2 -left-2 text-sm font-semibold bg-theme-white rounded-full w-5 h-5 p-1">
            0
          </span>
        </Link>
      </div>

      <div
        className="block sm:hidden cursor-pointer"
        onClick={(): void => setIsNavbarShow((prevState) => !prevState)}
      >
        {isNavbarShow ? <IoCloseSharp size={30} /> : <GiHamburgerMenu size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
