import { NavigationTabLists } from './tab-navigation';

export enum AppNavigation {
  WELCOME = 'Welcome',
  WELCOMEINFO = 'WelcomeInfo',
  REGISTRATION = 'Registration',
  AUTH = 'Auth',
  VERIFY = 'Verify',
  FORGOT = 'Forgot',
  HOME = 'Home',
  SCHEDULE = 'Schedule',
  LEARNINGHUB = 'Study',
  PROFILE = 'Profile',
}

interface NavigationSplashType {
  show?: boolean;
}

export type NavigationStackLists<F = any> = {
  [AppNavigation.WELCOME]: undefined;
  [AppNavigation.WELCOMEINFO]: undefined;
  [AppNavigation.REGISTRATION]: NavigationSplashType | undefined;
  [AppNavigation.AUTH]: NavigationSplashType | undefined;
  [AppNavigation.VERIFY]: undefined;
  [AppNavigation.FORGOT]: NavigationSplashType | undefined;
  [AppNavigation.HOME]: undefined;
  [AppNavigation.SCHEDULE]: undefined;
  [AppNavigation.LEARNINGHUB]: undefined;
  [AppNavigation.PROFILE]: undefined;
};

export type RootStackParamList = NavigationStackLists & NavigationTabLists;
