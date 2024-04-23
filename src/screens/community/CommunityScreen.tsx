import {
  BottomSheetForCreatePost,
  LifeTab,
  ProblemTab,
  StudyTab,
} from '@components/community';
import { FontAwesome5 } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { RootTabScreenProps } from '@navigation/data';

import { Button, Text } from 'native-base';
import * as React from 'react';
import { useCallback, useRef } from 'react';
import { View } from 'react-native';
import { useWindowDimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { EvilIcons } from '@expo/vector-icons';
import {
  SceneMap,
  TabBar,
  TabBarIndicator,
  TabView,
} from 'react-native-tab-view';
import { headerStyles } from '@theme/globalStyles';

const renderScene = SceneMap({
  life: () => <LifeTab />,
  study: () => <StudyTab />,
  problem: () => <ProblemTab />,
});

export const CommunityScreen = ({
  navigation,
}: RootTabScreenProps<'Community'>) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'life', title: 'Life talk' },
    { key: 'study', title: 'Study talk' },
    { key: 'problem', title: 'Problem Solution' },
  ]);
  const TAB_MARGIN = 10;
  const bottomSheetModalCreatePostRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalCreatePostPress = useCallback(() => {
    bottomSheetModalCreatePostRef.current?.present();
  }, []);

  return (
    <>
      <View style={headerStyles.style}>
        <Text className="text-lg font-semibold">Community</Text>
        <View className="flex flex-row space-x-2">
          <Ionicons name={'search-outline'} size={25} color={'gray'} />
          <EvilIcons name="user" size={32} color="gray" />
          <Ionicons name={'notifications-outline'} size={25} color={'gray'} />
        </View>
      </View>
      <TabView
        renderTabBar={(props) => (
          <TabBar
            // scrollEnabled
            {...props}
            renderIndicator={(indicatorProps) => {
              // const width = indicatorProps.getTabWidth(index) - TAB_MARGIN;
              return <TabBarIndicator {...indicatorProps} />;
            }}
            indicatorStyle={{
              backgroundColor: '#333',
              height: 2,
              left: TAB_MARGIN / 2,
            }}
            renderLabel={({ route, color }) => (
              <Text style={{ color: 'black', fontSize: 13 }}>
                {route.title}
              </Text>
            )}
            style={{ backgroundColor: 'white', position: 'relative' }}
          />
        )}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      <Button
        ml="auto"
        maxW="50px"
        w="50px"
        position="absolute"
        bottom="20px"
        right="20px"
        zIndex={1}
        background="#62929E"
        rounded="full"
        onPress={handlePresentModalCreatePostPress}
        leftIcon={<FontAwesome5 name="pencil-alt" size={24} color="white" />}
      />
      {/* sheet for create post */}
      <BottomSheetForCreatePost
        bottomSheetModalCreatePostRef={bottomSheetModalCreatePostRef}
        navigation={navigation}
      />
    </>
  );
};
