import DefaultLayout from '../components/DefaultLayout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
