import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Friends from './Friends';

const TrollFriends = () => {
  return (
    <View className="mt-8 mx-5 border-b-[0.5px] border-gray-300 pb-8">
      <View className="flex-row items-center">
        <View className="flex-row items-center space-x-2 flex-1">
          <Text className="text-base font-bold">Choc ban</Text>
          <AntDesign name="questioncircle" size={20} color={'#d3d3d3'} />
        </View>
        <AntDesign name="right" size={20} />
      </View>
      <View className="mt-4 flex-row">
        <Friends
          avaUri="https://warmgun.com/wp-content/uploads/2021/10/banner-elearning.png"
          name="Phuc Moi <3"
        />
        <Friends
          avaUri="https://warmgun.com/wp-content/uploads/2021/10/banner-elearning.png"
          name="Vinh Vui Ve <3"
        />
        <Friends
          avaUri="https://warmgun.com/wp-content/uploads/2021/10/banner-elearning.png"
          name="Ron <3"
        />
        <Friends
          avaUri="https://warmgun.com/wp-content/uploads/2021/10/banner-elearning.png"
          name="The Cut <3"
        />
      </View>
    </View>
  );
};

export default TrollFriends;
