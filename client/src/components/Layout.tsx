import React from 'react';
import { Footer, Navbar } from '@/components';

const Layout: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
