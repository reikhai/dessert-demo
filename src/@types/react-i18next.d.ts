// src/react-i18next.d.ts
import 'react-i18next';
import { resources } from '../i18n/i18n';

// Extend the module with the correct types for translation keys
declare module 'react-i18next' {
  interface DefaultNamespace extends 'translation' {}
  interface Resources {
    translation: typeof ResourceStore;
  }
}
