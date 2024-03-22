import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
interface InformationProps {
    avaUri: string;
    location: string;
    status: string;
    userName: string;
    noLoves: string;
    rank: string;
}

export const Information: React.FC<InformationProps> = ({
    avaUri,status,userName, noLoves, rank, location
}) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikePress = () => {
        setIsLiked(!isLiked);
    };

    return (
        <View className='flex-col border-b-[0.5px] border-gray-300 rounded-lg pb-3 mb-2'>
            <View className='flex-row border-gray-300 rounded-lg pb-3 mb-2'>
                <Image source={{ uri: avaUri }} className='rounded-full h-14 w-14 ml-3'/>
                <View className='flex-col items-start justify-center mx-3 flex-1'>
                    <View className='flex-row items-start justify-center flex-1'>
                        <Text className='text-base font-bold text-amber-500'>{rank}</Text>
                        <Text className='text-base font-bold mx-2'>{userName}</Text>
                    </View>
                    <Text className='text-base text-amber-500' numberOfLines={1} ellipsizeMode='tail'>{location}</Text>
                </View>
            </View>
            <View className={` p-2 rounded-2xl bg-gray-50 flex items-center justify-center h-11`} >
                <Text className='text-sm'>{status}</Text>
            </View>
            <TouchableOpacity onPress={handleLikePress}>
                <View className={`p-2 rounded-2xl mt-2 ${isLiked ? 'bg-amber-500' : 'bg-gray-200'}  items-center justify-center h-14`} >
                    <Text className='text-base'>Like {isLiked ? parseInt(noLoves) + 1 : noLoves}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

