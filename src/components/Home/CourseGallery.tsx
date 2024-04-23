import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Video } from './Video';

const CourseGallery = () => {
  return (
    <View className="mt-4">
      <View className="flex-col mx-5 space-y-2 mb-2">
        <Text className="text-base font-bold">Thu vien video</Text>
        <Text className="text-base font-semibold">Hoc thu mien phi</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="bg-transparent pl-5"
      >
        <Video
          videoUri="https://ipprinting.my/storage/2022/08/Banner-01-scaled.jpg"
          title="JAVA OOP so 1 VKU"
        />
        <Video
          videoUri="https://ipprinting.my/storage/2022/08/Banner-01-scaled.jpg"
          title="JAVA OOP so 1 VKU"
        />
        <Video
          videoUri="https://ipprinting.my/storage/2022/08/Banner-01-scaled.jpg"
          title="JAVA OOP so 1 VKU"
        />
        <Video
          videoUri="https://ipprinting.my/storage/2022/08/Banner-01-scaled.jpg"
          title="JAVA OOP so 1 VKU"
        />
        <Video
          videoUri="https://ipprinting.my/storage/2022/08/Banner-01-scaled.jpg"
          title="JAVA OOP so 1 VKU"
        />
        <Video
          videoUri="https://ipprinting.my/storage/2022/08/Banner-01-scaled.jpg"
          title="JAVA OOP so 1 VKU"
        />
        <Video
          videoUri="https://ipprinting.my/storage/2022/08/Banner-01-scaled.jpg"
          title="JAVA OOP so 1 VKU"
        />
        <Video
          videoUri="https://ipprinting.my/storage/2022/08/Banner-01-scaled.jpg"
          title="JAVA OOP so 1 VKU"
        />
        <Video
          videoUri="https://ipprinting.my/storage/2022/08/Banner-01-scaled.jpg"
          title="JAVA OOP so 1 VKU"
        />
      </ScrollView>
      <View className="border-b-[0.5px] border-gray-400 mt-5 mx-5"></View>
    </View>
  );
};

export default CourseGallery;
