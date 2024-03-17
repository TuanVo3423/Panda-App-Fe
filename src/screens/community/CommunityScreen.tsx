import { RootTabScreenProps } from '@navigation/data';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export const CommunityScreen = ({
  navigation,
}: RootTabScreenProps<'Community'>) => {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate('FormPost')}>
        <Text>Community</Text>
      </Pressable>
    </View>
  );
};
