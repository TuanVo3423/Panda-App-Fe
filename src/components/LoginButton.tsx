import { View, Text, TouchableOpacity, ImageSourcePropType, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
interface LoginButtonProps {
    IconUri: any;
    descript: string;
    bgColor: string;
    txtColor: string;
}
const LoginButton : React.FC<LoginButtonProps>=({ IconUri, descript, bgColor, txtColor}) => {
    return (
        <TouchableOpacity className='h-14 rounded-xl w-full flex-row items-center justify-center my-1' style={{backgroundColor: bgColor}}>
            <Image source={{uri: IconUri}} className='h-4 w-4 mr-2' />
            <Text className='text-lg font-semibold' style={{color: txtColor}}>{descript}</Text>
        </TouchableOpacity>
    )
}

export default LoginButton