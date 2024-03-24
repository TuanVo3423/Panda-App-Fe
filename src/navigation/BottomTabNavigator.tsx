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
import { View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={25}
              color={'gray'}
            />
          ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'gray',
        })}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'albums' : 'albums-outline'}
              size={25}
              color={'gray'}
            />
          ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'gray',
        }}
      />
      <BottomTab.Screen
        name="Capture"
        component={CaptureScreen}
        options={
          {
            // headerShown: false,
            // title: 'Community',
            // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }
        }
      />

      <BottomTab.Screen
        name="Community"
        component={CommunityScreen}
        options={({ navigation }: RootTabScreenProps<'Community'>) => ({
          // headerShown: false,
          title: 'Community',
          headerRight: () => (
            <View className="flex flex-row space-x-2 px-4">
              <Ionicons name={'search-outline'} size={25} color={'gray'} />
              <EvilIcons name="user" size={32} color="gray" />
              <Ionicons
                name={'notifications-outline'}
                size={25}
                color={'gray'}
              />
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'
              }
              size={25}
              color={'gray'}
            />
          ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'gray',
        })}
      />

      <BottomTab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          // headerShown: false,
          // title: 'Community',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'menu-sharp' : 'menu-outline'}
              size={25}
              color={'gray'}
            />
          ),
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'gray',
        }}
      />
    </BottomTab.Navigator>
  );
}
