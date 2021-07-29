import Head from 'next/head';
import Footer from '../components/essential/Footer';
import Navbar from '../components/essential/Navbar';
import SearchContext from '../context/SearchContext';
import { useState } from 'react';

const DefaultLayout = ({ children, title, input }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>{title || 'Next Webshop'}</title>
      </Head>
      <Navbar input={input} />
      {children}
      <Footer />
    </SearchContext.Provider>
  );
};

export default DefaultLayout;
