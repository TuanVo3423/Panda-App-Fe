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
import { View } from 'native-base';
import BottomTabNavigator from './BottomTabNavigator';
import { TeacherProfileScreen } from '@screens/explore';

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
          name="TeacherProfile"
          options={({ navigation }: AppStackScreenProps<'TeacherProfile'>) => ({
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
          component={TeacherProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
