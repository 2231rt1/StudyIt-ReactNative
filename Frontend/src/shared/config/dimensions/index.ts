import { Dimensions } from 'react-native';
import * as Device from 'expo-device'; // Импортируем expo-device
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// UTILS
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('screen');
export const FLEX = { flex: 1 };

// PADDING
export const CONTAINER_PADDING = hp(30);
export const CONTENT_PADDING = hp(10);

// MARGIN
export const TITLE_MARGIN = hp(10);
export const MAIN_HORIZONTAL = wp(0);
export const MAIN_VERTICAL = wp(25);

// RADIUS
export const CONTENT_RADIUS = hp(15);
export const CONTENT_IN_RADIUS = hp(10);

// NAVIGATION
export const NAV_HEIGHT = hp(70); // Значение по умолчанию
export const NAV_PADDING_VERTICAL = wp(10);
export const NAV_PADDING_TOP = hp(5);
export const NAV_PADDING_BOTTOM = hp(8);
export const NAV_FONT_SIZE = hp(11);
