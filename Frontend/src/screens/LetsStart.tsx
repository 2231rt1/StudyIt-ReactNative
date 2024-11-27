import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
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

  const logoDimensions = {
    width: width * 0.8,
    height: ((width * 0.8) / 329) * 400,
  };

  const dynamicStyles = StyleSheet.create({
    title: {
      fontSize: width * 0.08,
      fontFamily: 'PlayfairDisplayBlack',
      textAlign: 'center',
      color: '#000',
    },
    subtitle: {
      fontSize: width * 0.035,
      fontFamily: 'PlayfairDisplayRegular',
      textAlign: 'center',
      color: '#666',
    },
    button: {
      marginTop: height * 0.04,
      backgroundColor: '#000',
      padding: 10,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
    buttonText: {
      fontSize: width * 0.05,
      color: '#FFF',
      fontFamily: 'PlayfairDisplayBold',
    },
  });

  const availableHeight = height - insets.top - insets.bottom;
  const showSubtitle = availableHeight > 700;

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
        <LetsStartLogo
          width={logoDimensions.width}
          height={logoDimensions.height}
        />
        <Text
          style={[dynamicStyles.title, styles.shadow]}
          accessibilityLabel='Приветственное сообщение'
        >
          Единственное {'\n'} приложение для {'\n'} учебы, которое {'\n'} тебе
          нужно!
        </Text>
        {showSubtitle && (
          <Text
            style={[dynamicStyles.subtitle, styles.shadow]}
            accessibilityLabel='Подзаголовок'
          >
            Следи за оценками! Узнавай домашнее задание! {'\n'} Борись в таблице
            лидеров!
          </Text>
        )}
        <TouchableOpacity
          style={[
            dynamicStyles.button,
            { width: width * 0.45, height: height * 0.05 },
          ]}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'OpeningScreen' }],
            })
          }
        >
          <Text style={dynamicStyles.buttonText}>Начнем!</Text>
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
  shadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 14,
  } as ViewStyle,
});

export default LetsStart;
