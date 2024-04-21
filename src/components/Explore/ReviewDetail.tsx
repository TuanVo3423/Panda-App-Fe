import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

interface ReviewDetailProps {
    star: string;
    time: string;
    location: string;
    content: string;
}

export const ReviewDetail: React.FC<ReviewDetailProps> = ({
    star, time, location, content
}) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= parseInt(star)) {
            stars.push(<Ionicons key={i} name="star" size={20} color="gold" />);
        } else {
            stars.push(<Ionicons key={i} name="star-outline" size={20} color="black" />);
        }
    }
  return (
    <View className='flex-col rounded-lg pt-1'>
        <View className='flex-row items-center rounded-lg ml-1'>
            {stars}
            <Text className='mx-2 text-xs text-gray-400 py-2'>{time}</Text>
            <Text className='mr-2 text-xs text-gray-400 py-2'>•</Text>
            <Text className='text-xs text-gray-400 py-2'>{location}</Text>
        </View>
        <View className='flex-row rounded-lg pb-3 mb-2'>
            <Text className='items-start text-base mx-2'>{content}</Text>
        </View>
    </View>
  )
}

