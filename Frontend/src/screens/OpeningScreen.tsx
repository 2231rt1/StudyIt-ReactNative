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
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppLogo from '../assets/SVG/AppLogo';

type RootParamList = {
  OpeningScreen: undefined;
};
const OpeningScreen = () => {
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

  const logoDimensions = {
    width: width * 0.8,
    height: width * 0.8 * (258 / 314),
  };

  const dynamicStyles = StyleSheet.create({
    title: {
      fontSize: width * 0.18,
      marginTop: height * 0.01,
      fontFamily: 'FigmaHand',
      textAlign: 'center',
      color: '#000',
    } as ViewStyle,
    subtitle: {
      fontSize: width * 0.035,
      marginTop: height * 0.01,
      fontFamily: 'InterSemiBold',
      color: '#515151',
    } as ViewStyle,
    logoTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      marginBottom: height * 0.07,
      marginTop: height * 0.01,
    } as ViewStyle,
    buttonContainer: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingBottom: insets.bottom + 20,
    } as ViewStyle,
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      backgroundColor: '#000',
      marginTop: height * 0.01,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    } as ViewStyle,
    buttonText: {
      fontSize: width * 0.04,
      fontFamily: 'InterSemiBold',
      color: '#000',
    } as ViewStyle,
  });

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
        <View style={[dynamicStyles.logoTextContainer]}>
          <View style={[styles.logoContainer, { paddingLeft: width * 0.05 }]}>
            <AppLogo
              width={logoDimensions.width}
              height={logoDimensions.height}
              resizeMode='contain'
            />
          </View>
          <Text style={[dynamicStyles.title, styles.shadow]}>StudyIt</Text>
          <Text style={[dynamicStyles.subtitle]}>
            У соседей была зеленей трава...
          </Text>
        </View>

        <View style={[dynamicStyles.buttonContainer]}>
          <TouchableOpacity
            style={[
              dynamicStyles.button,
              { backgroundColor: '#FFF' },
              { width: width * 0.85, height: height * 0.06 },
            ]}
            onPress={() => console.log('Создать аккаунт')}
          >
            <Text style={[dynamicStyles.buttonText, { color: '#000' }]}>
              Создать аккаунт
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              dynamicStyles.button,
              { width: width * 0.85, height: height * 0.06 },
            ]}
            onPress={() => console.log('Войти')}
          >
            <Text style={[dynamicStyles.buttonText, { color: '#FFF' }]}>
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
  shadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 14,
  } as ViewStyle,
});

export default OpeningScreen;
