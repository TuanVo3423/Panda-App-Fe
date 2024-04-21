import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Friends from './Friends';

const TrollFriends = () => {
    return (
        <View className='mt-8 mx-5 border-b-[0.5px] border-gray-300 pb-8'>
            <View className='flex-row items-center'>
                <View className='flex-row items-center space-x-2 flex-1'>
                    <Text className='text-base font-bold'>Choc ban</Text>
                    <AntDesign name='questioncircle' size={20} color={'#d3d3d3'} />
                </View>
                <AntDesign name='right' size={20} />
            </View>
            <View className='mt-4 flex-row'>
                <Friends avaUri='https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/426406582_3275165722779328_6956692654044124959_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKRKAp6Ht-2cOdjSEt_j7_ccwLuAhpTVpxzAu4CGlNWknEkV4SL6eGplszEEan1m9IuboLMndYVc2u6nGIP35Z&_nc_ohc=MaNA5UwpEq8Ab5uLSpm&_nc_ht=scontent.fdad3-1.fna&oh=00_AfD1VB9D8OWPJ2UqE3_S-ksVc88JmjdY9GUTgWcT1Yt_bA&oe=6625D035'
                name='Tho cute <3'/>
                <Friends avaUri='https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/426406582_3275165722779328_6956692654044124959_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKRKAp6Ht-2cOdjSEt_j7_ccwLuAhpTVpxzAu4CGlNWknEkV4SL6eGplszEEan1m9IuboLMndYVc2u6nGIP35Z&_nc_ohc=MaNA5UwpEq8Ab5uLSpm&_nc_ht=scontent.fdad3-1.fna&oh=00_AfD1VB9D8OWPJ2UqE3_S-ksVc88JmjdY9GUTgWcT1Yt_bA&oe=6625D035'
                name='Tho cute <3'/>
                <Friends avaUri='https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/426406582_3275165722779328_6956692654044124959_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKRKAp6Ht-2cOdjSEt_j7_ccwLuAhpTVpxzAu4CGlNWknEkV4SL6eGplszEEan1m9IuboLMndYVc2u6nGIP35Z&_nc_ohc=MaNA5UwpEq8Ab5uLSpm&_nc_ht=scontent.fdad3-1.fna&oh=00_AfD1VB9D8OWPJ2UqE3_S-ksVc88JmjdY9GUTgWcT1Yt_bA&oe=6625D035'
                name='Tho cute <3'/>
                <Friends avaUri='https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/426406582_3275165722779328_6956692654044124959_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKRKAp6Ht-2cOdjSEt_j7_ccwLuAhpTVpxzAu4CGlNWknEkV4SL6eGplszEEan1m9IuboLMndYVc2u6nGIP35Z&_nc_ohc=MaNA5UwpEq8Ab5uLSpm&_nc_ht=scontent.fdad3-1.fna&oh=00_AfD1VB9D8OWPJ2UqE3_S-ksVc88JmjdY9GUTgWcT1Yt_bA&oe=6625D035'
                name='Tho cute <3'/>
                
            </View>
        </View>

    )
}

export default TrollFriends