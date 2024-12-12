import * as Localization from 'expo-localization';

export const getLocalize = <T extends string = 'en'>(): T => {
  const locales = Localization.getLocales();
  console.log('Available locales:', locales);
  const languageCode = locales[0]?.languageCode || 'en';
  return languageCode as T;
};
