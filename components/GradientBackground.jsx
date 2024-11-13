// GradientBackground.jsx
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

const GradientBackground = React.memo(({ children }) => {
  return (
    <LinearGradient
      colors={['#E2F2FD', '#C3B1E1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        {children}
      </View>
    </LinearGradient>
  );
});

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default GradientBackground;