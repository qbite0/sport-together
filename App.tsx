import { useCallback } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import Login from './screens/Login';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './screens/Register';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
              statusBarColor: '#16171c',
            }}
            name="Login"
          >
            {(props) => <Login {...props} onLayout={onLayoutRootView} />}
          </Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
              statusBarColor: '#16171c',
            }}
            name="Register"
          >
            {(props) => <Register {...props} onLayout={onLayoutRootView} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
