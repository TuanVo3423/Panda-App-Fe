import { Loading } from '@components/common';
import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/inter';
import { colors } from '@theme/colors';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppNavigation } from './src/navigation';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
      <NativeBaseProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <AppNavigation />
            <StatusBar
              style="light"
              backgroundColor={colors.primary}
              translucent
            />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
