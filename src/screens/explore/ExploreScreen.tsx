import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Card } from '@components/Explore/Card';
import { AppStackScreenProps, RootTabScreenProps } from '@navigation/data';
import { headerStyles } from '@theme/globalStyles';
import { useGetAllTutors } from '@services/api/explore/queries';
import { Center } from 'native-base';

type Props = {};

export const ExploreScreen = ({
  navigation,
  route,
}: RootTabScreenProps<'Explore'>) => {
  const { data, isLoading } = useGetAllTutors();

  const render = () => {
    if (isLoading) {
      return (
        <Center flex={1}>
          <ActivityIndicator size="large" />
        </Center>
      );
    }
    if (!isLoading && data) {
      return data
        .sort((a: any, b: any) => b.Point_int - a.Point_int)
        .map((tutor: any, index: number) => (
          <Card
            id={tutor.id}
            key={index}
            navigation={navigation}
            avaUri={tutor.avatar}
            userName={tutor.name}
            status="Moi nhat"
            noLoves={tutor.Point_int}
            rank="B"
            Rating_float={tutor.Rating_float}
          />
        ));
    }
  };
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
        <View className="mt-5 mx-5 mb-5 pb-3">{render()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
