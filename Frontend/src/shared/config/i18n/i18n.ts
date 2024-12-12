import i18n, { LanguageDetectorAsyncModule, InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocalize } from 'shared/lib/intl/getLocalize';
import { LanguageList, LanguageType } from './model/types/localize';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    try {
      const languageCode = getLocalize<LanguageType>();
      callback(languageCode);
    } catch (error) {
      console.error('Error detecting language:', error);
    }
  },
  init: () => {},
};

const i18nextOptions: InitOptions = {
  fallbackLng: LanguageList.RU,
  resources: {},
  interpolation: {
    escapeValue: false,
  },
};

const loadTranslations = async () => {
  const translations = {
    en: {
      translation: await import('./../../assets/locales/en.json'),
    },
    ru: {
      translation: await import('./../../assets/locales/ru.json'),
    },
    jp: {
      translation: await import('./../../assets/locales/jp.json'),
    },
    fr: {
      translation: await import('./../../assets/locales/fr.json'),
    },
  };

  return translations;
};

loadTranslations()
  .then(resources => {
    i18nextOptions.resources = resources;

    i18n
      .use(languageDetector)
      .use(initReactI18next)
      .init(i18nextOptions)
      .then(() => {
        console.log(
          'Loaded resources:',
          JSON.stringify(i18nextOptions.resources, null, 2),
        );
        console.log(
          'Available languages:',
          i18nextOptions.resources
            ? Object.keys(i18nextOptions.resources)
            : 'No resources available',
        );
        console.log('i18next initialized successfully');
      })
      .catch(error => {
        console.error('i18next initialization failed:', error);
      });
  })
  .catch(error => {
    console.error('Failed to load translations:', error);
  });

export default i18n;
