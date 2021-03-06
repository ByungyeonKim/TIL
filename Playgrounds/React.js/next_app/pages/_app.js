import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../src/components/footer';
import Top from '../src/components/top';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
