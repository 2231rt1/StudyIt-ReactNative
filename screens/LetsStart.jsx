import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import GradientBackground from '../components/GradientBackground';
import LetsStartLogo from '../assets/SVG/LetsStartLogo';
import useWindowDimensions from '../hooks/useWindowDimensions';

const getTextStyle = (fontSize, color, dynamicMarginTop) => ({
 fontSize,
 fontWeight: 'bold',
 color,
 marginBottom: 20,
 fontFamily: 'MyCustomFont',
 textAlign: "center",
 textShadowColor: 'rgba(0, 0, 0, 0.25)', 
 textShadowOffset: { width: 0, height: 4 }, 
 textShadowRadius: 4,
 marginTop: dynamicMarginTop,
});

const LetsStart = () => {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  // Вычисление отступов и размеров на основе ширины и высоты экрана
  const paddingHorizontal = width * 0.05;
  const logoWidth = width * 0.8;
  const logoHeight = (logoWidth / 329) * 400;

  // Загрузка шрифтов
  let [fontsLoaded] = useFonts({
    'MyCustomFont': require('../assets/Fonts/PlayfairDisplay.ttf'),
  });

  // Проверка, загружены ли шрифты
  if (!fontsLoaded) {
    return (
      <GradientBackground>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </GradientBackground>
    );
  }

  // Динамический размер шрифта
  const fontSize = width * 0.08; 
  const dynamicMarginTop = height * 0.05; 

  // Динамические размеры кнопки
  const buttonWidth = width * 0.4; // Примерно 40% от ширины экрана
  const buttonHeight = height * 0.05; // Примерно 8% от высоты экрана

  return (
    <GradientBackground>
      <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: paddingHorizontal, paddingRight: paddingHorizontal, marginTop: -50 }]}>
        <LetsStartLogo width={logoWidth} height={logoHeight} />
        <Text style={getTextStyle(fontSize, '#000', dynamicMarginTop)} accessibilityLabel="Приветственное сообщение">
          Единственное {'\n'} приложение для {'\n'} учебы, которое {'\n'} тебе нужно!
        </Text>

        <Text style={getTextStyle(15, '#555', 0)} accessibilityLabel="Приветственное сообщение">
         Следи за оценками! Узнавай домашнее задание! Борись в таблице лидеров!
        </Text>
        
        {/* Кнопка с динамическими размерами */}
        <TouchableOpacity style={[styles.button, { width: buttonWidth, height: buttonHeight }]} onPress={() => alert('Кнопка нажата!')}>
          <Text style={styles.buttonText}>Начнем!</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 50, 
  },
  buttonText: {
    fontSize: 20, 
    color: '#fff',
    fontFamily: 'MyCustomFont', 
    fontWeight: 'bold',
  },
});

export default LetsStart;