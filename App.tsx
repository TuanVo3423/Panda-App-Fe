import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';
import { Loading } from '@components/common';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigation } from './src/navigation';
import { colors } from '@theme/colors';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
// import OneSignal from 'react-native-onesignal';
// OneSignal.setAppId("api-key");
// OneSignal.promptForPushNotificationsWithUserResponse()

const queryClient = new QueryClient();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <StatusBar style="light" backgroundColor={colors.primary} translucent />
    </QueryClientProvider>
  );
}
