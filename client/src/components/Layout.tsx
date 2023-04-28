import React from 'react';
import { Navbar } from '@/components';

const Layout: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
