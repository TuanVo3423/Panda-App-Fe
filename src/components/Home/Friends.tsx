import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type FriendsProps = {
    avaUri: string;
    name: string;
};

const Friends: React.FC<FriendsProps> = ({ name, avaUri}) => {

    return (
        <View className='flex-col items-center space-y-2 mr-5'>
            <Image source={{ uri: avaUri}} className='rounded-full w-16 h-16' />
            <Text>{name}</Text>
            <TouchableOpacity className='bg-gray-300 rounded-2xl w-14 flex items-center justify-center py-1'>
                <Image source={{ uri: "https://static-00.iconduck.com/assets.00/backhand-index-pointing-left-default-emoji-2048x1880-3br1f2cq.png" }} className='w-5 h-5' />
            </TouchableOpacity>
        </View>
    );
};

export default Friends;
