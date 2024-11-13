// LetsStart.jsx
import React, { useMemo } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import GradientBackground from '../components/GradientBackground';
import LetsStartLogo from '../assets/LetsStart/SVG/LetsStartLogo';
import useWindowDimensions  from '../hooks/useWindowDimensions';

const LetsStart = () => {
  const insets = useSafeAreaInsets();  
  const { width, height } = useWindowDimensions();
  const paddingHorizontal = useMemo(() => width * 0.05, [width]);
  const logoWidth = width * 0.8;
  const logoHeight = (logoWidth / 329) * 400; 

  return (
    <GradientBackground>
      <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: paddingHorizontal, paddingRight: paddingHorizontal, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}></Text>
        <LetsStartLogo width={logoWidth} height={logoHeight} />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
});

export default LetsStart;