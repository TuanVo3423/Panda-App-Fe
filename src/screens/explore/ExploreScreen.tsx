import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { Card } from '@components/Explore/Card';
import { AppStackScreenProps, RootTabScreenProps } from '@navigation/data';
import { headerStyles } from '@theme/globalStyles';

type Props = {};

export const ExploreScreen = ({
  navigation,
  route,
}: RootTabScreenProps<'Explore'>) => {
  return (
    <SafeAreaView className="bg-white pt-2">
      {/* Header */}
      <View style={headerStyles.style}>
        <Text className="text-lg font-semibold">Explore</Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 50,
          backgroundColor: 'white',
        }}
      >
        <View className="mt-5 mx-5 mb-5 pb-3">
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Tuan Dep Trai"
            status="So 1 VN"
            noLoves="538"
            rank="B"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Phuc Moi"
            status="Moi nhat"
            noLoves="150"
            rank=""
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Vinh giảng hòa"
            status="Hoc hanh cai gi, ngu cho khoe"
            noLoves="150"
            rank="B"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="The 2 minutes"
            status="Lam moi thu trong vong 2 phut"
            noLoves="150"
            rank="A"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Ron hoang toc"
            status="No Pain No Money"
            noLoves="150"
            rank="C"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Tuan Dep Trai"
            status="So 1 VN"
            noLoves="538"
            rank="B"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Phuc Moi"
            status="Moi nhat"
            noLoves="150"
            rank=""
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Vinh giảng hòa"
            status="Hoc hanh cai gi, ngu cho khoe"
            noLoves="150"
            rank="B"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="The 2 minutes"
            status="Lam moi thu trong vong 2 phut"
            noLoves="150"
            rank="A"
          />
          <Card
            navigation={navigation}
            avaUri="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/09/meme-che-15.jpg"
            userName="Ron hoang toc"
            status="No Pain No Money"
            noLoves="150"
            rank="C"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
