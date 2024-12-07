import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';
import { AppNavigation } from 'shared/config/navigation/index';
import { RootStackParamList } from 'shared/config/navigation/model/types/navigation';
import GradientBackground from 'shared/ui/backgrounds/GradientBackground';
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <GradientBackground>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={AppNavigation.WELCOME}
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' },
          }}
        >
          <Stack.Screen
            name={AppNavigation.WELCOME}
            component={Screens.WelcomeScreen}
          />
          <Stack.Screen
            name={AppNavigation.WELCOMEINFO}
            component={Screens.WelcomeInfoScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GradientBackground>
  );
};

export default App;
