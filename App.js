import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native'; 
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const App = () => {
  const insets = useSafeAreaInsets();
  
  const { width } = Dimensions.get('window'); 
  const paddingHorizontal = width * 0.05; 

  return (
    <LinearGradient
      colors={['#E2F2FD', '#C3B1E1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.linearGradient}
    >
      <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom, paddingLeft: paddingHorizontal, paddingRight: paddingHorizontal }]}>
        <StatusBar style="auto" />
        <Text style={styles.text}>Я легенда я легенда?</Text>
        <Image source={require('./assets/favicon.png')} style={styles.image} />
      </View>
    </LinearGradient>
  );
};

export default function Root() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});