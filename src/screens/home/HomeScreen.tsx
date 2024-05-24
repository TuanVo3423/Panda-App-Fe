import Category from '@components/Home/Category';
import CourseGallery from '@components/Home/CourseGallery';
import Quizz from '@components/Home/Quizz';
import Quotes from '@components/Home/Quotes';
import SpecialBanner from '@components/Home/SpecialBanner';
import Study from '@components/Home/Study';
import Trend from '@components/Home/Trend';
import TrollFriends from '@components/Home/TrollFriends';
import Feather from '@expo/vector-icons/Feather';
import { headerStyles } from '@theme/globalStyles';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export const HomeScreen = (props: any) => {
  const { navigation } = props;
  return (
    <SafeAreaView className="">
      <View style={headerStyles.style}>
        <View className="flex-row items-center justify-center pt-2 -mb-1">
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dftz2tmpm/image/upload/v1716476248/panda-vku/hdhrrucpoe5wexcf8usv.png',
            }}
            className="h-6 w-24 flex-1 ml-[-34px]"
          />
          {/* <Text className="flex-1">LOGO PANDA</Text> */}
          <View className="flex-row justify-center items-center space-x-3">
            <TouchableOpacity className="bg-[#f1f1f1] rounded-3xl px-3 py-1 flex-row items-center justify-center">
              <Image
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/019/046/339/original/gold-coin-money-symbol-icon-png.png',
                }}
                className="h-4 w-4 mr-2"
              />
              <Text className="text-[15px] font-semibold">My coins</Text>
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
            uri: 'https://warmgun.com/wp-content/uploads/2021/10/banner-elearning.png',
          }}
          className="w-full h-[250px]"
        />
        {/* Category   */}
        <Category />
        {/* Post */}
        <Trend navigation={navigation} />
        {/* Study */}
        <Study />
        {/* SpeacialBanner */}
        <SpecialBanner />
        {/* VideoGallery */}
        <CourseGallery />
        {/* Question */}
        <Quizz />
        {/* Troll  */}
        {/* <TrollFriends /> */}
        {/* Quotes  */}
        <Quotes content="The English language is a work in progress. Have fun with it." />
      </ScrollView>
    </SafeAreaView>
  );
};
