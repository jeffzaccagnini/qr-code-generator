import { initReactI18next } from 'react-i18next';
import i18n, { ThirdPartyModule } from 'i18next';
import appEn from './translations/en.json';

const i18nConfig = (resources: {}, init: ThirdPartyModule) => i18n
  .use(init)
  .init({
    lng: 'en',
    resources,
    interpolation: {
      escapeValue: false,
    },
  })

const resources = {
  en: {
    translation: appEn
  }
};

export default i18nConfig(resources, initReactI18next);
