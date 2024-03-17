import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

interface CategoryProps {
    urilink: string;
    cardName: string;
}

export const CategoryCards: React.FC<CategoryProps> = ({
    urilink,
    cardName
}) => {
    return (
        <TouchableOpacity className='mr-5'>
                <Image 
                source={{ uri: urilink }} 
                className='h-14 w-14 rounded-lg'/>
                <Text className='text-xs font-semibold text-center mt-1'>{cardName}</Text>
              </TouchableOpacity>
    )
}
