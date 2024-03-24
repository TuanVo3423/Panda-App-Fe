import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Information } from '@components/Explore/Information';
import { Statistical } from '@components/Explore/Statistical';
import Review from '@components/Explore/Review';

type Props = {};

export const ProfileScreen = (props: Props) => {
  return (
    <SafeAreaView className="bg-white">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 50,
          backgroundColor: 'white',
        }}
      >
        <View className="my-5 mx-5 pb-3">
          <Information
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Tuan them bu"
            location="Vietnam-Korean University"
            status="Di choi gé bị gé dụ"
            noLoves="538"
            rank="A"
          />
          <Statistical rank="B" answer="14.0K" rating="4.5" measure="" />
          <Review />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
