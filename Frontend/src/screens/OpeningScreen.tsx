import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useWindowDimensions from '../hooks/useWindowDimensions';
import GradientBackground from '../components/GradientBackground';
import useCustomFonts from '../hooks/useCustomFonts';
import AppLogo from '../assets/SVG/AppLogo';

const OpeningScreen = () => {
  // Загрузка размеров экрана
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();

  // Загрузка шрифтов
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
      marginTop,
      fontFamily: 'FigmaHand',
      textAlign: 'center',
      color: '#000',
    }),
    subtitle: (fontSize: number, marginTop: number): TextStyle => ({
      fontSize,
      marginTop,
      fontFamily: 'InterSemiBold',
      color: '#515151',
    }),
    logoTextContainer: (marginBottom: number, marginTop: number) => ({
      justifyContent: 'center' as ViewStyle['justifyContent'],
      alignItems: 'center' as ViewStyle['alignItems'],
      padding: 20,
      marginBottom,
      marginTop,
    }),
    buttonContainer: (paddingBottom: number) => ({
      justifyContent: 'flex-end' as ViewStyle['justifyContent'],
      alignItems: 'center' as ViewStyle['alignItems'],
      paddingBottom,
    }),
    button: (marginTop: number, backgroundColor: string) => ({
      justifyContent: 'center' as ViewStyle['justifyContent'],
      alignItems: 'center' as ViewStyle['alignItems'],
      borderRadius: 15,
      backgroundColor,
      marginTop,
    }),
    buttonText: (fontSize: number, color: string) => ({
      fontSize,
      fontFamily: 'InterSemiBold',
      color,
    }),
  };

  // Динамические размеры элементов
  const logoWidth = width * 0.8;
  const leftPadding = width * 0.05;
  const fontSize = width * 0.18;
  const subFontSize = width * 0.035;
  const buttonWidth = width * 0.85;
  const buttonHeight = height * 0.06;
  const buttonFontSize = width * 0.04;
  const dynamicButtonBottom = insets.bottom + 20;
  const dynamicMarginBottom = height * 0.1;
  const marginTopDynamic = height * 0.01;

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
        <View
          style={[
            dynamicStyles.logoTextContainer(
              dynamicMarginBottom,
              marginTopDynamic,
            ),
          ]}
        >
          <View style={[styles.logoContainer, { paddingLeft: leftPadding }]}>
            <AppLogo
              width={logoWidth}
              height={logoWidth * (258 / 314)}
              resizeMode='contain'
            />
          </View>
          <Text style={dynamicStyles.title(fontSize, marginTopDynamic)}>
            StudyIt
          </Text>
          <Text style={dynamicStyles.subtitle(subFontSize, marginTopDynamic)}>
            У соседей была зеленей трава...
          </Text>
        </View>

        <View style={[dynamicStyles.buttonContainer(dynamicButtonBottom)]}>
          <TouchableOpacity
            style={[
              dynamicStyles.button(marginTopDynamic, '#FFF'),
              { width: buttonWidth, height: buttonHeight },
            ]}
            onPress={() => console.log('Создать аккаунт')}
          >
            <Text style={dynamicStyles.buttonText(buttonFontSize, '#000')}>
              Создать аккаунт
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              dynamicStyles.button(marginTopDynamic, '#000'),
              { width: buttonWidth, height: buttonHeight },
            ]}
            onPress={() => console.log('Войти')}
          >
            <Text style={dynamicStyles.buttonText(buttonFontSize, '#FFF')}>
              Войти
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    aspectRatio: 314 / 258,
  } as ViewStyle,
});

export default OpeningScreen;
