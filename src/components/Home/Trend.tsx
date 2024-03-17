import { View, Text, Image } from 'react-native'
import React from 'react'
import { Post } from './Post'
import Feather from '@expo/vector-icons/Feather';

const Trend = () => {
  return (
    <View className='mt-5 mx-5 border-b-[0.5px] border-gray-200 mb-5 pb-3'>
        <View className='flex-row justify-center items-center mb-2'>
          <View className='flex-row items-center flex-1'>
            <Text className='font-bold text-lg'>Bai dang HOT nhat</Text>
            <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/011/999/958/non_2x/fire-icon-free-png.png' }} className='h-8 w-8' />
          </View>
          <Feather name='chevron-right' size={25} />
        </View>
        <Post avaUri='https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg' userName='Phuc 20cm' status='Gay nhung ma chim dai' imgUri='https://pbs.twimg.com/media/F2vLomXaAAAgOGr.jpg' />
        <Post avaUri='https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg' userName='Phuc 20cm' status='Gay nhung ma chim dai' imgUri='https://pbs.twimg.com/media/F2vLomXaAAAgOGr.jpg' />
        <Post avaUri='https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg' userName='Phuc 20cm' status='Gay nhung ma chim dai' imgUri='https://pbs.twimg.com/media/F2vLomXaAAAgOGr.jpg' />
      </View>
  )
}

export default Trend