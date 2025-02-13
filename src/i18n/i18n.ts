// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import cnTranslation from './locales/cn.json';


i18n
  .use(initReactI18next) // pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      cn: {
        translation: cnTranslation,
      },
    },
    lng: localStorage.getItem('language') || 'en', // Load language from localStorage (if set)
    fallbackLng: 'en', // fallback language if translation is not available
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
