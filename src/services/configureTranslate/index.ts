import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const configureTranslate = () => {
  i18n
    .use(initReactI18next)
    .use(Backend)
    .use(LanguageDetector)
    .init({
      resources: {
        pt: {
          translation: {
            'Load Another': 'Carregar Outra',
            LanguageDetector,
          },
        },
        en: {
          translation: {
            'Carregar outra': 'Load Another',
            LanguageDetector,
          },
        },
      },
      lng: 'en',
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false,
      },
    });
};
