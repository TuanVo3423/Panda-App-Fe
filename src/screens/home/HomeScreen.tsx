import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import { headerStyles } from '@theme/globalStyles';
export const HomeScreen = (props: any) => {
  const { navigation } = props;
  return (
    <SafeAreaView className=''>
      <View className="bg-white py-3">
        <View className="flex-row items-center justify-center mx-5">
          <Text className="flex-1">LOGO PANDA</Text>
          <View className="flex-row justify-center items-center space-x-3">
            <TouchableOpacity className="bg-[#f1f1f1] rounded-3xl px-3 py-2 flex-row items-center justify-center">
              <Image
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/019/046/339/original/gold-coin-money-symbol-icon-png.png',
                }}
                className="h-4 w-4 mr-2"
              />
              <Text className="text-[15px] font-semibold">Xu cua toi</Text>
            </TouchableOpacity>
            <Feather
              name="user"
              size={22}
              onPress={() => navigation.navigate('MyProfile')}
            />
            <Feather
              onPress={() => navigation.navigate('Notifications')}
              name="bell"
              size={22}
            />
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 150,
          backgroundColor: 'white',
        }}
      >
        {/* Ads  */}
        <Image
          source={{
            uri: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/426406582_3275165722779328_6956692654044124959_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFKRKAp6Ht-2cOdjSEt_j7_ccwLuAhpTVpxzAu4CGlNWknEkV4SL6eGplszEEan1m9IuboLMndYVc2u6nGIP35Z&_nc_ohc=MaNA5UwpEq8Ab5uLSpm&_nc_ht=scontent.fdad3-1.fna&oh=00_AfD1VB9D8OWPJ2UqE3_S-ksVc88JmjdY9GUTgWcT1Yt_bA&oe=6625D035',
          }}
          className="w-full h-[250px]"
        />
        {/* Category   */}
        <Category />
        {/* Post */}
        <Trend />
        {/* Study */}
        <Study />
        {/* SpeacialBanner */}
        <SpecialBanner />
        {/* VideoGallery */}
        <CourseGallery />
        {/* Question */}
        <Quizz />
        {/* Troll  */}
        <TrollFriends />
        {/* Quotes  */}
        <Quotes content="Miet mai quay tay van may se toi" />
      </ScrollView>
    </SafeAreaView>
  );
};
