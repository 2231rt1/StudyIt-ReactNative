import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useWindowDimensions from "../hooks/useWindowDimensions";
import GradientBackground from "../components/GradientBackground";
import useCustomFonts from "../hooks/useCustomFonts";
import AppLogo from "../assets/SVG/AppLogo";

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
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </GradientBackground>
    );
  }

  // Динамические размеры элементов
  const logoWidth = width * 0.7;
  const leftPadding = width * 0.05;
  const fontSize = width * 0.15;
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
        <View style={[styles.logoTextContainer(dynamicMarginBottom)]}>
          <View style={[styles.logoContainer, { paddingLeft: leftPadding }]}>
            <AppLogo
              style={[
                styles.logo,
                { width: logoWidth, height: logoWidth * (258 / 314) },
              ]}
              resizeMode="contain"
            />
          </View>
          <Text style={[styles.title(fontSize, marginTopDynamic)]}>
            StudyIt
          </Text>
          <Text style={[styles.subtitle(subFontSize, marginTopDynamic)]}>
            У соседей была зеленей трава...
          </Text>
        </View>

        {/* Контейнер для кнопок */}
        <View style={[styles.buttonContainer(dynamicButtonBottom)]}>
          <TouchableOpacity
            style={[
              styles.button(marginTopDynamic, "#FFF"),
              { width: buttonWidth, height: buttonHeight },
            ]}
            onPress={() => console.log("Создать аккаунт")}
          >
            <Text style={styles.buttonText(buttonFontSize, "#000")}>
              Создать аккаунт
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button(marginTopDynamic, "#000"),
              { width: buttonWidth, height: buttonHeight },
            ]}
            onPress={() => console.log("Войти")}
          >
            <Text style={styles.buttonText(buttonFontSize, "#FFF")}>Войти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: (fontSize, marginTop) => ({
    fontSize,
    marginTop,
    fontFamily: "FigmaHand",
    textAlign: "center",
    color: "#000",
  }),
  subtitle: (fontSize, marginTop) => ({
    fontSize,
    marginTop,
    fontFamily: "InterSemiBold",
    color: "#515151",
  }),
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    aspectRatio: 314 / 258,
  },
  logoTextContainer: (marginBottom) => ({
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom,
  }),
  buttonContainer: (paddingBottom) => ({
    justifyContent: "flex-end", // Обеспечивает размещение кнопок внизу
    alignItems: "center",
    paddingBottom, // Добавлено для отступа от нижней части экрана
  }),
  button: (marginTop, backgroundColor) => ({
    marginTop,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor,
  }),
  buttonText: (fontSize, color) => ({
    fontSize,
    fontFamily: "InterSemiBold",
    color,
  }),
});

export default OpeningScreen;
