import { View, ActivityIndicator } from 'react-native';
import { useFonts, Inter_500Medium, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from "@react-navigation/native";

import { theme } from './src/theme';
import Routes from './src/routes';

function MyLoading() {
  return (
    <View style={{"flex": 1, "alignItems": "center", "justifyContent": "center" }}>
      <ActivityIndicator size="large" color="#7C3AED" />
    </View>
  )
}

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_500Medium,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded && !fontError) {
    return <MyLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
