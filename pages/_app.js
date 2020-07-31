import Head from 'components/head';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default App;
