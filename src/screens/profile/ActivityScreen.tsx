import { CommentTab, LikeTab, PostTab } from '@components/profile';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import {
  SceneMap,
  TabBar,
  TabBarIndicator,
  TabView,
} from 'react-native-tab-view';

const renderScene = SceneMap({
  post: () => <PostTab />,
  comment: () => <CommentTab />,
  like: () => <LikeTab />,
});
const ActivityScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'post', title: 'Post' },
    { key: 'comment', title: 'Comment/Reply' },
    { key: 'like', title: 'Like' },
  ]);
  const layout = useWindowDimensions();
  const TAB_MARGIN = 2;
  return (
    <View className="bg-white border-t-[0.2px] border-gray-400 h-full">
      <View className="flex-row items-center space-x-5 p-5">
        <Image
          source={{
            uri: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg',
          }}
          className="h-20 w-20 rounded-full"
        />
        <View className="flex-col ">
          <Text className="font-semibold text-lg">Tuan chim nho</Text>
          <Text>Chim dai 10 cm thich tap Gym</Text>
        </View>
      </View>
      <View className="border-[1px] rounded-sm bg-gray-100 border-gray-400 p-5 mx-5 flex-col space-y-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-3">
            <Text className="text-lg text-gray-500 font-semibold">
              Problems solution status
            </Text>
            <AntDesign name="exclamationcircle" size={20} color={'gray'} />
          </View>

          <Text className="font-semibold text-gray-500 top-4">Level 1</Text>
        </View>
        <ProgressBar progress={0.5} color={'#788896'} />
        <Text className="text-base text-gray-500 font-semibold">
          Only 1 problem(s) to level up
        </Text>
      </View>

      <TabView
        style={{ marginTop: 6 }}
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
              <Text
                style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}
              >
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
    </View>
  );
};

export default ActivityScreen;
