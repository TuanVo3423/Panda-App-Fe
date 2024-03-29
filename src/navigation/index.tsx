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
import { ProfileScreen } from '@screens/profile';
import { SafeAreaView, Text } from 'react-native';
import { deviceSafeAreaDetection } from '@theme/globalStyles';
import Feather from '@expo/vector-icons/Feather';

const Stack = createNativeStackNavigator<AppStackParamList>();
export function AppNavigation() {
  const { isAuthenticated } = useAuthenticatedStore();
  // const isLogged = true;

  return (
    <SafeAreaView style={deviceSafeAreaDetection.androidSafeArea}>
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
              options={{
                headerShown: false,
              }}
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
            options={({
              navigation,
            }: AppStackScreenProps<'TeacherProfile'>) => ({
              headerShown: true,
              title: 'Teacher Profile',
              header: () => (
                <View className="flex bg-white py-4 px-4 flex-row items-center justify-between border-b-[1px] border-gray-100">
                  <Feather
                    name="chevron-left"
                    size={28}
                    className=""
                    onPress={() => navigation.goBack()}
                  />
                  <Text className="text-lg font-semibold">Teacher Profile</Text>
                  <View className="flex flex-row space-x-2">
                    <AntDesign name="gift" size={24} color="gray" />
                    <AntDesign name="deleteuser" size={24} color="gray" />
                  </View>
                </View>
              ),
              headerTitleStyle: {
                fontSize: 16,
              },
              // headerRight: () => (

              // ),
            })}
            component={TeacherProfileScreen}
          />
          <Stack.Screen
            name="Profile"
            options={({ navigation }: AppStackScreenProps<'Profile'>) => ({
              // headerShown: false,
              title: 'Profile',
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
    </SafeAreaView>
  );
}
