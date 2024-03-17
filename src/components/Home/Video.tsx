import { View, Text, Image } from 'react-native'
import React from 'react'
interface VideoProps {
    videoUri: string;
    title: string;
}
export const Video: React.FC<VideoProps> = ({
    videoUri, title }) => {
    return (
        <View className='flex-col space-y-2 mr-3'>
            <Image source={{ uri: videoUri }} className='h-[160px] w-[240px] rounded-lg' />
            <Text className='text-base font-semibold'>{title}</Text>
        </View>
    )
}
