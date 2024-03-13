import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
interface LanguageProps {
  id: string;
  lang: string;
  translang: string;
  value: string;
  onValueChange: (value: string) => void;
}
export const LanguagueCheck: React.FC<LanguageProps> = ({
  id,
  lang,
  translang,
  value,
  onValueChange,
}) => {
  return (
    <TouchableOpacity className="flex-row items-center justify-center mx-5 my-3">
      <View className="flex-1">
        <Text className="font-bold text-base">{lang}</Text>
        <Text className="text-gray-500">{translang}</Text>
      </View>
      <RadioButton.Group onValueChange={onValueChange} value={value}>
        <RadioButton.Android
          value={id}
          color="orange"
          uncheckedColor="orange"
          status={value === id ? 'checked' : 'unchecked'}
        />
      </RadioButton.Group>
    </TouchableOpacity>
  );
};
