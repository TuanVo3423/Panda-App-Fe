import { Box, Stack } from 'native-base';
import * as React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import {
  TabView,
  SceneMap,
  TabBar,
  TabBarIndicator,
} from 'react-native-tab-view';

type Props = {};
const FirstRoute = () => <View style={{ flex: 1, backgroundColor: 'white' }} />;

const SecondRoute = () => (
  <Stack>
    <Text>Helo</Text>
  </Stack>
);

const ThidRoute = () => <View style={{ flex: 1, backgroundColor: 'white' }} />;

const renderScene = SceneMap({
  life: FirstRoute,
  study: SecondRoute,
  problem: ThidRoute,
});

export const Tab = (props: Props) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'life', title: 'Life talk' },
    { key: 'study', title: 'Study talk' },
    { key: 'problem', title: 'Problem Solution' },
  ]);
  const TAB_MARGIN = 10;
  return (
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
            <Text style={{ color: 'black', fontSize: 13 }}>{route.title}</Text>
          )}
          style={{ backgroundColor: 'white' }}
        />
      )}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};
