// Core
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Views
import { useTranslation } from 'next-i18next';
import { BaseView } from '../views/BaseView';

// Components
import { Main } from '../components/Main';

// Other
import { parseThemeFromCookie, getLocaleFromContext } from '../helpers';

const Home: NextPage<{ theme: string }> = ({ theme }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{ t('titles:main') }</title>
      </Head>
      <BaseView theme = { theme }>
        <Main />
      </BaseView>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const locale = getLocaleFromContext(context);
  const theme = parseThemeFromCookie(context);

  return {
    props: {
      theme,
      ...await serverSideTranslations(locale, ['common', 'titles']),
    },
  };
};

export default Home;
