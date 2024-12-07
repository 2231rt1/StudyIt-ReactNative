import i18n, { LanguageDetectorAsyncModule, InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocalize } from 'shared/lib/intl/getLocalize';
import { LanguageList, LanguageType } from './model/types/localize';

import ru from './../../assets/locales/ru.json';
import en from './../../assets/locales/en.json';
import jp from './../../assets/locales/jp.json';
import fr from './../../assets/locales/fr.json';

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
  cacheUserLanguage: () => {},
};

const i18nextOptions: InitOptions = {
  fallbackLng: LanguageList.EN,
  resources: {
    ru: { translation: ru },
    en: { translation: en },
    jp: { translation: jp },
    fr: { translation: fr },
  },
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(languageDetector).use(initReactI18next).init(i18nextOptions);

export default i18n;
