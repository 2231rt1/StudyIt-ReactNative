import { useFonts } from 'expo-font';

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    FigmaHand: require('shared/assets/fonts/FigmaHand-Bold.ttf'),
    Roboto: require('shared/assets/fonts/Roboto.ttf'),
    PlayfairDisplayBold: require('shared/assets/fonts/PlayfairDisplayBold.ttf'),
    PlayfairDisplayBlack: require('shared/assets/fonts/PlayFairDisplayBlack.ttf'),
    InterRegular: require('shared/assets/fonts/inter-regular.otf'),
    InterBold: require('shared/assets/fonts/inter-medium.otf'),
    InterSemiBold: require('shared/assets/fonts/inter-semi-bold.otf'),
  });

  return fontsLoaded;
};

export default useCustomFonts;
