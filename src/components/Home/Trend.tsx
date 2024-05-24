import { View, Text, Image, ActivityIndicator } from 'react-native';
import React from 'react';
import { Post } from './Post';
import Feather from '@expo/vector-icons/Feather';
import { useGetPosts } from '@services/api/posts/queries';
import { Center } from 'native-base';

const Trend = () => {
  const { data, isLoading } = useGetPosts();
  const render = () => {
    if (isLoading) {
      return (
        <Center flex={1}>
          <ActivityIndicator size="large" />
        </Center>
      );
    }
    if (!isLoading && data) {
      return data
        .sort((a: any, b: any) => b.upvote - a.upvote)
        .slice(0, 3)
        .map((post: any, index: number) => (
          <Post
            key={index}
            avaUri={post.User.avatar}
            userName={post.User.name}
            status={post.title}
            imgUri={post.image_buffering}
          />
        ));
    }
  };
  return (
    <View className="mt-5 mx-5 border-b-[0.5px] border-gray-200 mb-5 pb-3">
      <View className="flex-row justify-center items-center mb-2">
        <View className="flex-row items-center flex-1">
          <Text className="font-bold text-lg">HOTTEST posts</Text>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/011/999/958/non_2x/fire-icon-free-png.png',
            }}
            className="h-8 w-8"
          />
        </View>
        <Feather name="chevron-right" size={25} />
      </View>
      {render()}
    </View>
  );
};

export default Trend;
