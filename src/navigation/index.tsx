import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './RootNavigator';
import { AuthNavigator } from './AuthNavigator';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';

export function Navigation() {
  const { isAuthenticated } = useAuthenticatedStore();
  const isLogged = true;
  return (
    <NavigationContainer>
      {isLogged ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
