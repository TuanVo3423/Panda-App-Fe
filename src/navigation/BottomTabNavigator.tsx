import Colors from '@constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import useColorScheme from '@hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CaptureScreen } from '@screens/capture';
import { CommunityScreen } from '@screens/community';
import { ExploreScreen } from '@screens/explore';
import { RootTabParamList, RootTabScreenProps } from './data';
// import { Home } from '@screens/home';
import { HomeScreen } from '@screens/home/HomeScreen';
import { MenuScreen } from '@screens/menu';
import React from 'react';
import { Text, VStack, View } from 'native-base';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'relative',
          minHeight: 60,
          bottom: 2,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          // title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <VStack alignItems="center">
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={22}
                color={'gray'}
              />
              <Text
                fontWeight="semibold"
                color={focused ? 'gray.700' : 'gray.500'}
                fontSize="12px"
              >
                Home
              </Text>
            </VStack>
          ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'gray',
        })}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          // title: 'Explore',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <VStack alignItems="center">
              <Ionicons
                name={focused ? 'albums' : 'albums-outline'}
                size={22}
                color={'gray'}
              />
              <Text
                fontWeight="semibold"
                color={focused ? 'gray.700' : 'gray.500'}
                fontSize="12px"
              >
                Explore
              </Text>
            </VStack>
          ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'gray',
        }}
      />
      <BottomTab.Screen
        name="Capture"
        component={CaptureScreen}
        options={{
          headerShown: false,
          // title: 'Community',
          tabBarIcon: ({ color, focused }) => (
            <View background="#62929E" rounded="full" padding={2.5}>
              <Ionicons name={'camera-outline'} size={24} color={'white'} />
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="Community"
        component={CommunityScreen}
        options={({ navigation }: RootTabScreenProps<'Community'>) => ({
          title: 'Community',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <VStack alignItems="center">
              <Ionicons
                name={
                  focused
                    ? 'chatbubble-ellipses'
                    : 'chatbubble-ellipses-outline'
                }
                size={22}
                color={'gray'}
              />
              <Text
                fontWeight="semibold"
                color={focused ? 'gray.700' : 'gray.500'}
                fontSize="12px"
              >
                Community
              </Text>
            </VStack>
          ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'gray',
        })}
      />

      <BottomTab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ color, focused }) => (
            <VStack alignItems="center">
              <Ionicons
                name={focused ? 'menu-sharp' : 'menu-outline'}
                size={22}
                color={'gray'}
              />
              <Text
                fontWeight="semibold"
                color={focused ? 'gray.700' : 'gray.500'}
                fontSize="12px"
              >
                Menu
              </Text>
            </VStack>
          ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'gray',
        }}
      />
    </BottomTab.Navigator>
  );
}
