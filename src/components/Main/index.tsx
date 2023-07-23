// Core
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTranslation } from 'next-i18next';

// Hooks
import { useLogin } from './hooks/useLogin';

export const Main: FC = () => {
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [login, { loading }] = useLogin();
  const { locale, defaultLocale } = useRouter();
  const { t } = useTranslation();

  return (
    <section>
      <h1>{ t('common:greeting') } {t('common:guestName')}! :)</h1>
      <div>
        <p>{ t('common:currentLocale') }: { locale }</p>
        <p>{ t('common:defaultLocale') }: { defaultLocale }</p>
      </div>
    </section>
  );
};
