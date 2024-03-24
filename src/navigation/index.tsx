import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './AuthNavigator';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AppStackParamList,
  AppStackScreenProps,
  AuthStackScreenProps,
  RootTabScreenProps,
} from './data';
// import { ModalScreen } from '@screens/home';
import BottomTabNavigator from './BottomTabNavigator';
import { NotificationScreen } from '@screens/home/NotificationScreen';
import { ProfileScreen } from '@screens/explore/ProfileScreen';
import { FormPostScreen } from '@screens/community/FormPostScreen';
import { TopicFilters } from '@components/community/data';
import { View } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

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
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Group>
          <Stack.Screen
            name="Notifications"
            component={NotificationScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={({ route }: AppStackScreenProps<'FormPost'>) => ({
              headerShown: false,
            })}
            name="FormPost"
            component={FormPostScreen}
          />
        </Stack.Group>
        <Stack.Screen
          name="Profile"
          options={({ navigation }: AppStackScreenProps<'Profile'>) => ({
            // headerShown: false,
            title: 'Teacher Profile',
            headerTitleStyle: {
              fontSize: 16,
            },
            headerRight: () => (
              <View className="flex flex-row space-x-2">
                <AntDesign name="gift" size={24} color="gray" />
                <AntDesign name="deleteuser" size={24} color="gray" />
              </View>
            ),
          })}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
