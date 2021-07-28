import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const DefaultLayout = ({ children, title, input }) => {
  return (
    <>
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
    </>
  );
};

export default DefaultLayout;
