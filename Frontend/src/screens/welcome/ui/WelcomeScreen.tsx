import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  AppNavigation,
  RootStackParamList,
} from 'shared/config/navigation/index';
import LetsStartLogo from 'shared/assets/ui/LetsStartLogo';
import { styles } from './WelcomeScreenStyle';
import GlowButton from 'shared/ui/Buttons/NeonLightButton/NeonLightButton';
import { useTranslation } from 'react-i18next';

type WelcomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  AppNavigation.WELCOME
>;

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  navigation,
  route,
}) => {
  const { t } = useTranslation();
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
          {t('Welcome.title')}
        </Text>
        <Text style={styles.message} accessibilityLabel='Подзаголовок'>
          {t('Welcome.message')}
        </Text>
      </View>

      <GlowButton
        title={t('Welcome.buttonText')}
        onPress={() => navigation.navigate(AppNavigation.WELCOMEINFO)}
      />
    </View>
  );
};
