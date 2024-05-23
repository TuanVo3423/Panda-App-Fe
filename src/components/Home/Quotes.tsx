import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type QuotesProps = {
  content: string;
};

const Quotes: React.FC<QuotesProps> = ({ content }) => {
  return (
    <View className="mt-5 mx-5">
      <Text className="text-base font-bold">Today's quote</Text>
      <Text className="text-sm mt-5">{content}</Text>
    </View>
  );
};

export default Quotes;
