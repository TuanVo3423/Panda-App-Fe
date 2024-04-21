import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Progress } from 'native-base';
import CircularProgress from 'react-native-circular-progress-indicator';
interface StatisticalProps {
  rank: string;
  answer: string;
  rating: string;
  measure: string;
}

export const Statistical: React.FC<StatisticalProps> = ({
  rank,
  answer,
  rating,
  measure,
}) => {
  return (
    <View className="flex-col border-b-[0.5px] border-gray-300 rounded-lg py-2">
      <View className="flex-row border-gray-300 rounded-lg">
        <View className="items-center justify-center flex-col mx-3 flex-1">
          <Text className="text-3xl font-bold text-[#62929D] py-2">
            {rank !== '' ? rank : 'Beginner'}
          </Text>
        </View>
        <View className="items-center justify-center flex-col mx-3 flex-1">
          <Text className="text-3xl font-bold text-[#62929D] py-2">{answer}</Text>
        </View>
      </View>
      <View className="flex-row border-gray-300 rounded-lg pb-3 mb-2">
        <View className="items-center justify-center flex-col mx-3 flex-1">
          <Text className="text-lg mx-2">Rank</Text>
        </View>
        <View className="items-center justify-center flex-col mx-3 flex-1">
          <Text className="text-lg mx-2">Answer</Text>
        </View>
      </View>
      <View className="flex-row border-gray-300 rounded-lg">
        <View className="items-center justify-center flex-col mx-3 flex-1">
          <CircularProgress
            value={Number(rating)}
            duration={2000}
            radius={50}
            progressValueColor={'#62929D'}
            activeStrokeColor={'#62929D'}
            maxValue={5}
            titleColor={'#62929D'}
            progressValueFontSize={32}
            inActiveStrokeWidth={5}
            activeStrokeWidth={5}
            titleStyle={{ fontWeight: 'bold' }}
            progressFormatter={(value: number) => {
              'worklet';

              return value.toFixed(1);
            }}
          />
        </View>
        <View className="items-center justify-center flex-col mx-3 flex-1">
          <Text className="text-3xl font-bold text-[#62929D] py-2">
            {measure !== '' ? measure : '-'}
          </Text>
        </View>
      </View>
      <View className="flex-row border-gray-300 rounded-lg pb-3 mb-2">
        <View className="items-center justify-center flex-col mx-3 flex-1">
          <Text className="text-lg mx-2">Rating</Text>
        </View>
        <View className="items-center justify-center flex-col mx-3 flex-1">
          <Text className="text-lg mx-2">Measuring</Text>
        </View>
      </View>
    </View>
  );
};
