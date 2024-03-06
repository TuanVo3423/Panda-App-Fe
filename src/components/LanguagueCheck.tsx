import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper'
import RadioButtonGroup from 'react-native-paper/lib/typescript/components/RadioButton/RadioButtonGroup';
interface LanguageProps {
    id: string;
    lang: string;
    translang: string;
    value: string;
    onValueChange: (value: string) => void;
}
const LanguagueCheck : React.FC<LanguageProps>= ({id,lang, translang, value, onValueChange}) => {

  return (
    <TouchableOpacity className='flex-row items-center justify-center mx-5 my-3'>

    <View className='flex-1'>
      <Text className='font-bold text-base'>{lang}</Text>
      <Text className='text-gray-500'>{translang}</Text>
    </View>
    <RadioButton.Group onValueChange={onValueChange} value={value}>
    <RadioButton.Android
      value={id}
      color= 'orange'
      uncheckedColor= 'orange'
      status={value === id ? 'checked' : 'unchecked'}
    />
    </RadioButton.Group>
  </TouchableOpacity>
  )
}

export default LanguagueCheck