import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationPL from './locales/pl/translation.json';
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
import translationES from './locales/es/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
  pl: { translation: translationPL },
  en: { translation: translationEN },
  de: { translation: translationDE},
  es: { translation: translationES},
  fr: { translation: translationFR}
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl',
    lng: 'pl',
    interpolation: { escapeValue: false }
  });

export default i18n;
