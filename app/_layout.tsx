import { Stack } from "expo-router";
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import styles from './stylesheets';

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "GlobalDefault": require("../assets/fonts/SpaceMono-Regular.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <>
      <Stack screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerBackVisible: false,
        headerTitle: "GeoLens",
        headerTitleStyle: styles.title,
          headerLeft: () => null
      }} />
    </>
  )
}
