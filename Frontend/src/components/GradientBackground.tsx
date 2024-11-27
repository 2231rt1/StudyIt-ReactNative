import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientBackgroundProps {
  children: React.ReactNode; // Define children prop
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
}) => (
  <LinearGradient colors={['#E2F2FD', '#C3B1E1']} style={styles.gradient}>
    <View style={styles.container}>{children}</View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GradientBackground;
