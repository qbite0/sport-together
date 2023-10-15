import { useCallback } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import Login from './screens/Login';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Rubik-Regular': require("./assets/fonts/Rubik-Regular.ttf"),
    'Rubik-Bold': require("./assets/fonts/Rubik-Bold.ttf"),
    'Rubik-Light': require("./assets/fonts/Rubik-Light.ttf")
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
      <Login onLayout={onLayoutRootView} />
    </GluestackUIProvider>
  );
}