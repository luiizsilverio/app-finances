import { View, ActivityIndicator } from 'react-native';
import { useFonts, Inter_500Medium, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import { Dashboard } from './src/pages/Dashboard';
import { theme } from './src/theme';

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
      <Dashboard />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
