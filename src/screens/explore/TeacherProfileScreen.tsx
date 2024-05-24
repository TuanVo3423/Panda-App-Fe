import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Information } from '@components/Explore/Information';
import { Statistical } from '@components/Explore/Statistical';
import Review from '@components/Explore/Review';
import { AppStackScreenProps } from '@navigation/data';
import { ANOMYMOUS_AVATAR } from '@constants/index';

type Props = {};

export const TeacherProfileScreen = ({
  route,
  navigation,
}: AppStackScreenProps<'TeacherProfile'>) => {
  const { data } = route.params;
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
            id={data.id}
            avaUri={data.avaUri ? data.avaUri : ANOMYMOUS_AVATAR}
            userName={data.userName}
            location="Vietnam-Korean University"
            status="Vietnam-Korean University"
            noLoves={data.noLoves}
            rank="B"
          />
          <Statistical
            rank="B"
            answer="14.0K"
            rating={data.Rating_float}
            measure=""
          />
          <Review id={data.id} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
