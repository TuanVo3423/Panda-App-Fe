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
import { HStack, View } from 'native-base';
import BottomTabNavigator from './BottomTabNavigator';
import { TeacherProfileScreen } from '@screens/explore';
import { ProfileScreen } from '@screens/profile';
import { SafeAreaView, Text } from 'react-native';
import { deviceSafeAreaDetection } from '@theme/globalStyles';
import Feather from '@expo/vector-icons/Feather';
import ActivityScreen from '@screens/profile/ActivityScreen';
import { MyProfileScreen } from '@screens/profile/MyProfileScreen';
import { PreviewResultScreen } from '@screens/capture';

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
                <View className="flex bg-white py-5 mt-3 pb-4 px-4 flex-row items-center justify-between border-b-[1px] border-gray-100">
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
            })}
            component={TeacherProfileScreen}
          />
          <Stack.Screen
            name="Profile"
            options={({ navigation }: AppStackScreenProps<'Profile'>) => ({
              headerShown: true,
              title: 'Profile',
              headerTitleStyle: {
                fontSize: 16,
              },
              header: () => (
                <View className="bg-white pb-4 pt-9 px-5 border-b-[0.5px] border-gray-300">
                  <View className=" flex-row items-center justify-between space-x-5">
                    <HStack space={4}>
                      <Feather
                        name="chevron-left"
                        size={28}
                        className=""
                        onPress={() => navigation.goBack()}
                      />
                      <Text className="text-lg font-regular">Profile</Text>
                    </HStack>
                    <View className="flex flex-row space-x-2"></View>
                  </View>
                </View>
              ),
            })}
            component={ProfileScreen}
          />
          <Stack.Screen
            options={({ navigation }: AppStackScreenProps<'MyProfile'>) => ({
              headerShown: true,
              title: 'My Profile',

              header: () => (
                <View className="bg-white pt-6 pb-3 mx-5">
                  <View className=" flex-row items-center space-x-5">
                    <Feather
                      name="chevron-left"
                      size={28}
                      className=""
                      onPress={() => navigation.goBack()}
                    />
                    <Text className="text-lg font-regular">My Profile</Text>
                  </View>
                </View>
              ),
              headerTitleStyle: {
                fontSize: 16,
              },
            })}
            name="MyProfile"
            component={MyProfileScreen}
          />
          <Stack.Screen
            options={({ navigation }: AppStackScreenProps<'Activity'>) => ({
              headerShown: true,
              title: 'Activity Community',
              header: () => (
                <View className="bg-white pt-6 pb-4 mx-5">
                  <View className=" flex-row items-center space-x-5">
                    <Feather
                      name="chevron-left"
                      size={28}
                      className=""
                      onPress={() => navigation.goBack()}
                    />
                    <Text className="text-lg font-regular">
                      My Activity In Community
                    </Text>
                  </View>
                </View>
              ),
              headerTitleStyle: {
                fontSize: 16,
              },
            })}
            name="Activity"
            component={ActivityScreen}
          />
          <Stack.Screen
            options={({
              navigation,
            }: AppStackScreenProps<'PreviewCaptureResult'>) => ({
              headerShown: true,
              title: 'Preview Result',
              header: () => (
                <View className="bg-white pt-6 pb-4 mx-5">
                  <View className=" flex-row items-center space-x-5">
                    <Feather
                      name="chevron-left"
                      size={28}
                      className=""
                      onPress={() => navigation.goBack()}
                    />
                    <Text className="text-lg font-regular">
                      Preview Your Result
                    </Text>
                  </View>
                </View>
              ),
              headerTitleStyle: {
                fontSize: 16,
              },
            })}
            name="PreviewCaptureResult"
            component={PreviewResultScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
