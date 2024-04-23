import { View, Text, Image } from 'react-native';
import React from 'react';
import { Post } from './Post';
import Feather from '@expo/vector-icons/Feather';

const Trend = () => {
  return (
    <View className="mt-5 mx-5 border-b-[0.5px] border-gray-200 mb-5 pb-3">
      <View className="flex-row justify-center items-center mb-2">
        <View className="flex-row items-center flex-1">
          <Text className="font-bold text-lg">Bai dang HOT nhat</Text>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/011/999/958/non_2x/fire-icon-free-png.png',
            }}
            className="h-8 w-8"
          />
        </View>
        <Feather name="chevron-right" size={25} />
      </View>
      <Post
        avaUri="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
        userName="Phuc Xinh"
        status="Can cu bu sieng nang"
        imgUri="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
      />
      <Post
        avaUri="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
        userName="Phuc Xinh"
        status="Can cu bu sieng nang"
        imgUri="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
      />
      <Post
        avaUri="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
        userName="Phuc Xinh"
        status="Can cu bu sieng nang"
        imgUri="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
      />
    </View>
  );
};

export default Trend;
