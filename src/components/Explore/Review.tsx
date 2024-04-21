import { View, Text, Image } from 'react-native'
import React from 'react'
import { ReviewDetail } from './ReviewDetail'
import Feather from '@expo/vector-icons/Feather';

const Review = () => {
    return (
        <View className='mt-3 mx-2 border-b-[0.5px] border-gray-200 pb-3'>
            <View className='flex-row justify-center items-center mb-2'>
                <View className='flex-row items-center flex-1'>
                    <Text className='font-semibold text-base'>Review from friends</Text>
                </View>
                <Text className='text-base text-[#62929D]'>View all</Text>
            </View>
            <View className='mt-2'>
                <ReviewDetail star='4' content='fantastic' time='4 months ago' location='Algebra'/>
                <ReviewDetail star='3' content='fantastic' time='4 months ago' location='Algebra'/>
            </View>
        </View>
  );
};

export default Review
