import { useFonts } from 'expo-font';

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    FigmaHand: require('../assets/fonts/FigmaHand-Bold.ttf'),
    Roboto: require('../assets/fonts/Roboto.ttf'),
    PlayfairDisplayBold: require('../assets/fonts/PlayfairDisplayBold.ttf'),
    PlayfairDisplayBlack: require('../assets/fonts/PlayFairDisplayBlack.ttf'),
    InterRegular: require('../assets/fonts/inter-regular.otf'),
    InterBold: require('../assets/fonts/inter-medium.otf'),
    InterSemiBold: require('../assets/fonts/inter-semi-bold.otf'),
  });

  return fontsLoaded;
};

export default useCustomFonts;
