import { View, Text, Image } from 'react-native'
import React from 'react'
interface FeedbackProps {
    avaUri: string;
    name: string;
    grade: string;
    time: string;
    title: string;
    content: string;
    tag1: string;
    tag2: string;
    tag3: string;
}
export const Feedback: React.FC<FeedbackProps> = ({
    avaUri,
    name,grade,
    time,
    title,
    content,
    tag1, tag2, tag3
}) => {
    return (
        <View className=''>
            <View className='flex-col space-y-3'>
                <View className='flex-row items-center'>
                    <View className='flex-row items-center flex-1 space-x-2'>
                        <Image source={{ uri: avaUri }} className='w-10 h-10 rounded-full' />
                        <View className='flex-row items-center space-x-5'>
                            <Text className='font-semibold text-base'>{name}</Text>
                            <Text className='text-base font-semibold'>{grade}</Text>
                        </View>
                    </View>
                    <Text className='text-xs text-gray-500'>{time}</Text>
                </View>
                <View>
                    <Text className='text-base font-semibold'>{title}</Text>
                    <Text className='text-gray-500'>{content}</Text>
                </View>

            </View>
            <View className='flex-row space-x-3 top-7'>
                <View className='bg-blue-500 rounded-xl p-2'>
                    <Text className='font-semibold text-white'>{tag1}</Text>
                </View>
                <View className='bg-blue-500 rounded-xl p-2'>
                    <Text className='font-semibold text-white'>{tag2}</Text>
                </View>
                <View className='bg-blue-500 rounded-xl p-2'>
                    <Text className='font-semibold text-white'>{tag3}</Text>
                </View>
            </View>
        </View>
    )
}
