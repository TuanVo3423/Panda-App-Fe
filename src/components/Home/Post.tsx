import { View, Text, Image } from 'react-native'
import React from 'react'
interface PostProps {
    avaUri: string;
    status: string;
    userName: string;
    imgUri:string;
}
export const Post: React.FC<PostProps> = ({
    avaUri,status,userName, imgUri
}) => {
  return (
    <View className='flex-col items-center justify-center border-[0.5px] border-gray-300 rounded-lg py-2 mb-2'>
          <View className='flex-row items-center justify-center mx-5'>
            <View className='flex-col flex-1 space-y-1'>
              <View className='flex-row items-center space-x-3'>
                <Image source={{ uri: avaUri }} className='rounded-full h-8 w-8' />
                <Text className='text-sm font-bold'>{userName}</Text>
              </View>
              <Text className='text-base'>{status}</Text>
            </View>
            <Image source={{ uri: imgUri }} className='rounded-lg h-14 w-20' />
          </View>
        </View>
  )
}

