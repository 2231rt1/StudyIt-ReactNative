import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

const FontLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    FigmaHand: require('shared/assets/fonts/FigmaHand-Bold.ttf'),
    Roboto: require('shared/assets/fonts/Roboto.ttf'),
    PlayfairDisplayBold: require('shared/assets/fonts/PlayfairDisplayBold.ttf'),
    PlayfairDisplayBlack: require('shared/assets/fonts/PlayFairDisplayBlack.ttf'),
    InterRegular: require('shared/assets/fonts/inter-regular.otf'),
    InterBold: require('shared/assets/fonts/inter-medium.otf'),
    InterSemiBold: require('shared/assets/fonts/inter-semi-bold.otf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  return <>{children}</>;
};

export default FontLoader;
