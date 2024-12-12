import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens';
import i18n from 'shared/config/i18n/index';
import { I18nextProvider } from 'react-i18next';
import { AppNavigation } from 'shared/config/navigation/index';
import { RootStackParamList } from 'shared/config/navigation/model/types/navigation';
import GradientBackground from 'shared/ui/Backgrounds/GradientBackground';
const Stack = createNativeStackNavigator<RootStackParamList>();
import FontLoader from 'shared/lib/hooks/text/useCustomFonts';
const App = () => {
  return (
    <FontLoader>
      <GradientBackground>
        <I18nextProvider i18n={i18n}>
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
        </I18nextProvider>
      </GradientBackground>
    </FontLoader>
  );
};

export default App;
