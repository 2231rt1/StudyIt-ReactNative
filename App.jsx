import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LetsStart from "./screens/LetsStart";
import NewScreen from "./screens/OpeningScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LetsStart">
        <Stack.Screen
          name="LetsStart"
          component={LetsStart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OpeningScreen"
          component={NewScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function Root() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}
