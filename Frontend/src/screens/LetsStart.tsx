import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useWindowDimensions from '../hooks/useWindowDimensions';
import GradientBackground from '../components/GradientBackground';
import LetsStartLogo from '../assets/SVG/LetsStartLogo';
import useCustomFonts from '../hooks/useCustomFonts';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootParamList = {
  LetsStart: undefined;
  OpeningScreen: undefined;
};

const LetsStart = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParamList>>();
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return (
      <GradientBackground>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color='#0000ff' />
        </View>
      </GradientBackground>
    );
  }

  const dynamicStyles = {
    title: (fontSize: number, marginTop: number): TextStyle => ({
      fontSize,
      fontFamily: 'PlayfairDisplayBlack',
      marginTop,
      textAlign: 'center',
      color: '#000',
    }),
    subtitle: (fontSize: number): TextStyle => ({
      fontSize,
      fontFamily: 'PlayfairDisplayRegular',
      textAlign: 'center',
      color: '#666',
    }),
    button: (marginTop: number): ViewStyle => ({
      marginTop,
      backgroundColor: '#000',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    }),
    buttonText: (fontSize: number): TextStyle => ({
      fontSize,
      color: '#FFF',
      fontFamily: 'PlayfairDisplayBold',
    }),
  };

  const logoWidth = width * 0.8;
  const logoHeight = (logoWidth / 329) * 400;
  const fontSize = width * 0.08;
  const subFontSize = width * 0.035;
  const buttonWidth = width * 0.5;
  const buttonHeight = height * 0.05;
  const buttonFontSize = width * 0.05;
  const marginTopDynamic = height * 0.04;

  const heightThreshold = 900;
  const availableHeight = height - insets.top - insets.bottom;

  return (
    <GradientBackground>
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top + 20,
            paddingBottom: insets.bottom + 20,
            marginHorizontal: width * 0.05,
          },
        ]}
      >
        <LetsStartLogo width={logoWidth} height={logoHeight} />
        <Text
          style={dynamicStyles.title(fontSize, marginTopDynamic)}
          accessibilityLabel='Приветственное сообщение'
        >
          Единственное {'\n'} приложение для {'\n'} учебы, которое {'\n'} тебе
          нужно!
        </Text>
        {availableHeight > heightThreshold && (
          <Text
            style={dynamicStyles.subtitle(subFontSize)}
            accessibilityLabel='Подзаголовок'
          >
            Следи за оценками! Узнавай домашнее задание! {'\n'} Борись в таблице
            лидеров!
          </Text>
        )}
        <TouchableOpacity
          style={[
            dynamicStyles.button(marginTopDynamic),
            { width: buttonWidth, height: buttonHeight },
          ]}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'OpeningScreen' }],
            })
          }
        >
          <Text style={dynamicStyles.buttonText(buttonFontSize)}>Начнем!</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
});

export default LetsStart;
