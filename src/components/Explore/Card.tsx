import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
interface CardProps {
  avaUri: string;
  status: string;
  userName: string;
  noLoves: string;
  rank: string;
  navigation: RootTabScreenProps<'Explore'>['navigation'];
}
import Ionicons from '@expo/vector-icons/Ionicons';
import { RootTabScreenProps } from '@navigation/data';

export const Card: React.FC<CardProps> = ({
  avaUri,
  status,
  userName,
  noLoves,
  rank,
  navigation,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  const handleImagePress = () => {
    // Chuyển đến màn hình khác khi click vào hình ảnh
    navigation.navigate('TeacherProfile');
  };

  let rankColor = ''; // Màu sắc dựa vào rank

  switch (rank) {
    case 'A':
      rankColor = 'bg-amber-500';
      break;
    case 'B':
      rankColor = 'bg-blue-600';
      break;
    case 'C':
      rankColor = 'bg-gray-600';
      break;
    default:
      rankColor = 'bg-gray-300';
      break;
  }

  return (
    <View className="flex-row border-[0.5px] border-gray-300 rounded-lg py-3 mb-2">
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={{ uri: avaUri }}
          className="rounded-full h-14 w-14 ml-3"
        />
        <View
          className={`absolute items-center justify-center bottom-0 right-0 rounded-full ${rankColor} border-white border-2 h-6 w-6`}
        >
          <Text className="text-xs text-white font-bold truncate">
            {rank !== '' ? rank : '...'}
          </Text>
        </View>
      </TouchableOpacity>
      <View className="flex-col items-start justify-center mx-3 flex-1">
        <Text className="text-base font-bold">{userName}</Text>
        <Text className="text-sm" numberOfLines={1} ellipsizeMode="tail">
          {status}
        </Text>
      </View>
      <View className='flex-col items-center justify-center'>
        <TouchableOpacity
          onPress={handleLikePress}
          className="flex-col items-center justify-center mr-4"
        >
          <Ionicons
            name={isLiked ? 'heart' : 'heart-outline'}
            size={23}
            color={isLiked ? 'red' : 'black'}
          />
          <Text className="text-sm">
            {isLiked ? parseInt(noLoves) + 1 : noLoves}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
