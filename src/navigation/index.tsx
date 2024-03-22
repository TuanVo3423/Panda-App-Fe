import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './AuthNavigator';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList, AppStackScreenProps } from './data';
// import { ModalScreen } from '@screens/home';
import BottomTabNavigator from './BottomTabNavigator';
import { NotificationScreen } from '@screens/home/NotificationScreen';
import { FormPostScreen } from '@screens/community/FormPostScreen';
import { TopicFilters } from '@components/community/data';

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
        <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }}/>
        <Stack.Group>
          <Stack.Screen name="Notifications" component={NotificationScreen} options={{ headerShown: false }}/>
          <Stack.Screen
            options={({ route }: AppStackScreenProps<'FormPost'>) => ({
              headerShown: false,
            })}
            name="FormPost"
            component={FormPostScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
