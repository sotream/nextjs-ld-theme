// Core
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';

// Styles
import '../theme/styles.scss';

// Other
import nextI18NextConfig from '../../next-i18next.config';
// import { verifyBrowser } from '../helpers';

// const isBrowser = verifyBrowser();

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <title>Sotream</title>
      </Head>
      <Component { ...pageProps } />
    </>
  );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
