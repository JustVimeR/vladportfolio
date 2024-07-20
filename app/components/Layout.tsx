// components/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navigation from './Navigation';

type Props = {
  children: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Default Title' }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <Navigation/>
      </header>
      <main className='px-40 py-24'>{children}</main>
      <footer>
        {/* My підвал */}
      </footer>
    </div>
  );
};

export default Layout;
