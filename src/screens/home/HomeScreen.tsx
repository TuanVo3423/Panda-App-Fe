import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Category from '@components/Home/Category';
import Tab from '@components/Home/Tab';
import { Post } from '@components/Home/Post';
import Study from '@components/Home/Study';
import SpecialBanner from '@components/Home/SpecialBanner';
import CourseGallery from '@components/Home/CourseGallery';
import Quizz from '@components/Home/Quizz';
import TrollFriends from '@components/Home/TrollFriends';
import Quotes from '@components/Home/Quotes';
import Trend from '@components/Home/Trend';
type Props = {};
export const HomeScreen = (props: Props) => {
  return <SafeAreaView className='bg-transparent'>
    {/* Header */}
    <View className='bg-white py-3'>
      <View className='flex-row items-center justify-center mx-5'>
        <Text className='flex-1'>LOGO PANDA</Text>
        <View className='flex-row justify-center items-center space-x-3'>
          <TouchableOpacity className='bg-gray-100 rounded-3xl px-3 py-2 flex-row items-center justify-center'>
            <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/019/046/339/original/gold-coin-money-symbol-icon-png.png' }} className="h-4 w-4 mr-2" />
            <Text className='text-[15px] font-semibold'>Xu cua toi</Text>
          </TouchableOpacity>
          <Feather name='user' size={22} />
          <Feather name='bell' size={22} />
        </View>
      </View>
    </View>
    <ScrollView contentContainerStyle={{
      paddingBottom: 150,
      backgroundColor:'white'
    }}>
      {/* Category   */}
      <Category />
      {/* Post */}
      <Trend/>
      {/* Study */}
      <Study />
      {/* SpeacialBanner */}
      <SpecialBanner/>
      {/* VideoGallery */}
      <CourseGallery/>
      {/* Question */}
      <Quizz/>
      {/* Troll  */}
      <TrollFriends/>
      {/* Quotes  */}
      <Quotes content='Miet mai quay tay van may se toi'/>
    </ScrollView>
  </SafeAreaView>;
};
