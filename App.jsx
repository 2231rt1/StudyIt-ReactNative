import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LetsStart from './screens/LetsStart';

const App = () => {
  return (
    <LetsStart />
  );
};

export default function Root() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}