import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
import React from 'react';
import { AuthNavigator } from './AuthNavigator';
import { AppStackParamList, AppStackScreenProps } from './data';
// import { ModalScreen } from '@screens/home';
import { AntDesign } from '@expo/vector-icons';
import { FormPostScreen } from '@screens/community/FormPostScreen';
import { NotificationScreen } from '@screens/home/NotificationScreen';
import { FormPostScreen } from '@screens/community/FormPostScreen';

const Stack = createNativeStackNavigator<AppStackParamList>();
export function AppNavigation() {
  const { isAuthenticated } = useAuthenticatedStore();
  // const isLogged = true;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? 'Root' : 'Auth'}>
        <Stack.Screen
          name="Root"
          options={{ headerShown: false }}
          component={BottomTabNavigator}
        />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Group>
          <Stack.Screen name="Notifications" component={NotificationScreen} />
          <Stack.Screen name="FormPost" component={FormPostScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
