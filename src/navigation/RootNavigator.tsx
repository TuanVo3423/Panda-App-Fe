import { RootStackParamList } from './data';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NotFoundScreen } from '@screens/404';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';
// BottomTabNavigator
const Stack = createNativeStackNavigator<RootStackParamList>();
export function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Root"
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}
