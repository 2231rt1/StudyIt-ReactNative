import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  AppNavigation,
  RootStackParamList,
} from 'shared/config/navigation/index';
import LetsStartLogo from 'shared/assets/ui/LetsStartLogo';
import { styles } from './WelcomeScreenStyle';
import useCustomFonts from 'shared/lib/hooks/text/useCustomFonts';
import { CustomButton } from 'shared/ui/buttons/button';

type WelcomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  AppNavigation.WELCOME
>;

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  navigation,
  route,
}) => {
  useCustomFonts();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LetsStartLogo width={styles.logo.width} height={styles.logo.height} />
      </View>

      <View style={styles.content}>
        <Text
          style={styles.title}
          accessibilityLabel='Приветственное сообщение'
        >
          Единственное {'\n'} приложение для {'\n'} учебы, которое {'\n'} тебе
          нужно!
        </Text>

        <Text style={styles.message} accessibilityLabel='Подзаголовок'>
          Следи за оценками! Узнавай домашнее задание! {'\n'} Борись в таблице
          лидеров!
        </Text>
      </View>

      <CustomButton
        title='Начнем!'
        onPress={() => navigation.navigate(AppNavigation.WELCOMEINFO)}
        buttonStyle={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
};
