import { RootTabParamList, RootTabScreenProps } from './data';
import Colors from '@constants/Colors';
import useColorScheme from '@hooks/useColorScheme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CaptureScreen } from '@screens/capture';
import { CommunityScreen } from '@screens/community';
import { ExploreScreen } from '@screens/explore';
import { HomeScreen } from '@screens/home';
import { MenuScreen } from '@screens/menu';

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
        // <'Home'> la 1 man hinh trong root tab param list, no se dc nhan composite giua ButtonTabNavigator va RootTabParamList
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: 'Home',
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Modal')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}
          //   >
          //     <Text>INFO ICON</Text>
          //   </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore',
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
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
        options={
          {
            // headerShown: false,
            // title: 'Community',
            // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }
        }
      />

      <BottomTab.Screen
        name="Menu"
        component={MenuScreen}
        options={
          {
            // headerShown: false,
            // title: 'Community',
            // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          }
        }
      />
    </BottomTab.Navigator>
  );
}
