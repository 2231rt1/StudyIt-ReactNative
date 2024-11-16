import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useWindowDimensions from "../hooks/useWindowDimensions";
import GradientBackground from "../components/GradientBackground";
import LetsStartLogo from "../assets/SVG/LetsStartLogo";
import useCustomFonts from "../hooks/useCustomFonts";
import { useNavigation } from "@react-navigation/native";

const LetsStart = () => {
  // Использование навигации
  const navigation = useNavigation();

  // Загрузка размеров экрана
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  // Загрузка шрифтов
  const fontsLoaded = useCustomFonts();

  // Проверка загрузки шрифтов
  if (!fontsLoaded) {
    return (
      <GradientBackground>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </GradientBackground>
    );
  }

  // Динамические размеры элементов
  const logoWidth = width * 0.8;
  const logoHeight = (logoWidth / 329) * 400;
  const buttonWidth = width * 0.35;
  const buttonHeight = height * 0.05;
  const fontSize = width * 0.08;
  const subFontSize = width * 0.035;
  const buttonFontSize = width * 0.04;
  const marginTopDynamic = height * 0.04;

  // Минимальная высота
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
          style={styles.title(fontSize, marginTopDynamic)}
          accessibilityLabel="Приветственное сообщение"
        >
          Единственное {"\n"} приложение для {"\n"} учебы, которое {"\n"} тебе
          нужно!
        </Text>
        {availableHeight > heightThreshold && (
          <>
            <Text
              style={styles.subtitle(subFontSize)}
              accessibilityLabel="Подзаголовок"
            >
              Следи за оценками! Узнавай домашнее задание! {"\n"} Борись в
              таблице лидеров!
            </Text>
          </>
        )}
        <TouchableOpacity
          style={[
            styles.button(marginTopDynamic),
            { width: buttonWidth, height: buttonHeight },
          ]}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "OpeningScreen" }],
            })
          }
        >
          <Text style={styles.buttonText(buttonFontSize)}>Начнем!</Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: (fontSize, marginTop) => ({
    fontSize,
    fontFamily: "PlayfairDisplayBlack",
    marginTop,
    textAlign: "center",
    color: "#000",
  }),
  subtitle: (fontSize) => ({
    fontSize,
    fontFamily: "PlayfairDisplayBold",
    textAlign: "center",
    marginVertical: 10,
    color: "#555",
  }),
  button: (marginTop) => ({
    marginTop,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#000",
  }),
  buttonText: (fontSize) => ({
    fontSize,
    fontFamily: "InterSemiBold",
    color: "#FFFFFF",
  }),
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});

export default LetsStart;
