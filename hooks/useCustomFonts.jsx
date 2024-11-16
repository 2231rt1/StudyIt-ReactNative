import { useFonts } from "expo-font";

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    FigmaHand: require("../assets/Fonts/FigmaHand-Bold.ttf"),
    Roboto: require("../assets/Fonts/Roboto.ttf"),
    PlayfairDisplayBold: require("../assets/Fonts/PlayfairDisplayBold.ttf"),
    PlayfairDisplayBlack: require("../assets/Fonts/PlayFairDisplayBlack.ttf"),
    InterRegular: require("../assets/Fonts/inter-regular.otf"),
    InterBold: require("../assets/Fonts/inter-medium.otf"),
    InterSemiBold: require("../assets/Fonts/inter-semi-bold.otf"),
  });

  return fontsLoaded;
};

export default useCustomFonts;
