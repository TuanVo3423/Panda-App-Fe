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
    avaUri, status, userName, noLoves, rank, location
}) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikePress = () => {
        setIsLiked(!isLiked);
    };

    return (
        <View className='flex-col border-b-[0.5px] border-gray-300 rounded-lg pb-3 mb-2'>
            <View className='flex-row border-gray-300 rounded-lg pb-3 mb-2 space-x-6'>
                <Image source={{ uri: avaUri }} className='rounded-full h-20 w-20 ml-3' />
                <View className='flex-col items-start justify-center mx-3 flex-1'>
                    <View className='flex-row items-start justify-center flex-1'>
                        <Text className='text-base font-bold text-amber-500'>{rank}</Text>
                        <Text className='text-lg font-semibold mx-2'>{userName}</Text>
                    </View>
                    <Text className='text-base text-[#37646e]' numberOfLines={1} ellipsizeMode='tail'>{location}</Text>
                    <TouchableOpacity onPress={handleLikePress}>
                <View className={`mt-2 justify-center h-14`} >
                    <View className='flex-row items-center space-x-10'>
                    <View className={`py-2 w-24 flex items-center justify-center rounded-xl ${isLiked ? 'bg-[#62929D]' : 'bg-[#f1f1f1]'}`}><Text className='text-base'>{isLiked ? 'Unfollow' : 'Follow'}</Text></View>
            
                    <Text className='text-base'>{isLiked ? parseInt(noLoves) + 1 : noLoves}</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>               
                </View>
            </View>
            <View className={` p-2 rounded-2xl bg-[#f1f1f1] flex items-center justify-center h-11`} >
                <Text className='text-base'>{status}</Text>
            </View>
           
        </View>
    )
}

