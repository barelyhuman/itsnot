import Head from 'components/head';
import 'medium-editor/dist/css/medium-editor.min.css';
import 'medium-editor/dist/css/themes/beagle.min.css';
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
