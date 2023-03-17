import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from '../Search/Search';
import Image from 'next/image';

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
  const router = useRouter();

  return (
    <nav className="px-[100px] bg-theme-dark-brown w-full h-20 flex flex-row justify-between items-center">
      <Link href="/" className="flex flex-row items-center gap-2">
        <Image src="/logo.png" width={50} height={10} alt="the bookstore" />
        <h1 data-testid="logo" className="flex flex-col">
          <span className="text-sm">the</span>{' '}
          <span className="text-xl font-semibold -mt-1"> bookstore </span>
        </h1>
      </Link>
      <ul className="flex-1 ml-20 font-medium flex flex-row justify-start items-center gap-5">
        {MENU_LIST.map((item: { name: string; path: string }, i: React.Key) => (
          <li
            key={i}
            className={`${
              router.pathname == item.path && 'active'
            } text-lg transition transition-500 hover:-translate-y-[3px] hover:text-theme-white`}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Search />
    </nav>
  );
};

export default Navbar;
