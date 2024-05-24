import { View, Text, Image } from 'react-native';
import React from 'react';
import { ReviewDetail } from './ReviewDetail';
import Feather from '@expo/vector-icons/Feather';
import { QueryClient, useQueryClient } from 'react-query';
import { useGetPosts } from '@services/api/posts/queries';
import { Center } from 'native-base';
import { ActivityIndicator } from 'react-native-paper';

const Review = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetPosts();

  const render = () => {
    if (isLoading) {
      return (
        <Center flex={1}>
          <ActivityIndicator size="large" />
        </Center>
      );
    }
    if (data) {
      const filterData = data.filter((post) => post.user_id === id);
      console.log('filterData', filterData);
      if (filterData.length === 0) {
        return <Text>No review</Text>;
      } else {
        return filterData.map((item, idx) => {
          const Comment = item.Comment[0];
          console.log('Comment', Comment);
          return (
            <ReviewDetail
              star="2"
              content={Comment?.content}
              time="day ago"
              location="Vietnam-Korean University"
            />
          );
        });
      }
    }
  };

  return (
    <View className="mt-3 mx-2 border-b-[0.5px] border-gray-200 pb-3">
      <View className="flex-row justify-center items-center mb-2">
        <View className="flex-row items-center flex-1">
          <Text className="font-semibold text-base">Review from friends</Text>
        </View>
        <Text className="text-base text-[#62929D]">View all</Text>
      </View>
      <View className="mt-2">
        {render()}
        {/* <ReviewDetail
          star="4"
          content="fantastic"
          time="4 months ago"
          location="Algebra"
        />
        <ReviewDetail
          star="3"
          content="fantastic"
          time="4 months ago"
          location="Algebra"
        /> */}
      </View>
    </View>
  );
};

export default Review;
