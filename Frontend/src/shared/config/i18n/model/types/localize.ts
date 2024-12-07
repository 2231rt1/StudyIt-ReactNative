export enum LanguageList {
  RU = 'ru',
  EN = 'en',
  JP = 'jp',
  FR = 'fr',
}

export type LanguageType = Lowercase<keyof typeof LanguageList>;
