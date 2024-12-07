import { LanguageList } from '../types/localize';

type LanguageVoiceType = {
  [key in keyof typeof LanguageList as Lowercase<
    keyof typeof LanguageList
  >]: string;
};

export const languageVoice: LanguageVoiceType = {
  ru: 'ru-RU',
  en: 'en-US',
  jp: 'ja-JP',
  fr: 'fr-FR',
};
