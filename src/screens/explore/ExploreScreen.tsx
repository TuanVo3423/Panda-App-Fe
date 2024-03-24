import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { Card } from '@components/Explore/Card';
import { AppStackScreenProps, RootTabScreenProps } from '@navigation/data';

type Props = {};

export const ExploreScreen = ({
  navigation,
  route,
}: RootTabScreenProps<'Explore'>) => {
  return (
    <SafeAreaView className="bg-transparent">
      {/* Header */}
      <View className="bg-white py-3">
        <View className="flex-row items-center justify-center mx-6 mt-1 mb-1">
          <Text className="flex-1 font-bold text-2xl">Explore</Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 50,
          backgroundColor: 'white',
        }}
      >
        <View className="mt-5 mx-5 border-gray-200 mb-5 pb-3">
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Tuan them bu"
            status="Di choi gé bị gé dụ"
            noLoves="538"
            rank="B"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Phuc 20cm"
            status=""
            noLoves="150"
            rank=""
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Vinh giảng hòa"
            status="Hoc hanh cai con c** gi, ngu cho khoe"
            noLoves="150"
            rank="B"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="The 2 tieng"
            status="Dang cai thien tu 2 tieng len 3 tieng"
            noLoves="150"
            rank="A"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Ron hoang toc"
            status="Gay nhung ma chim dai"
            noLoves="150"
            rank="C"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Phuc 20cm"
            status="Hoc hanh cai con c** gi, ngu cho khoe"
            noLoves="150"
            rank=""
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Ron hoang to"
            status="Hoc hanh cai con c** gi, ngu cho khoe"
            noLoves="150"
            rank="B"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Tuan them bu"
            status="Hoc hanh cai con c** gi, ngu cho khoe"
            noLoves="150"
            rank="A"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="The 2 tieng"
            status="Gay nhung ma chim dai"
            noLoves="150"
            rank="C"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
