import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const SpecialBanner = () => {
  return (
    <View className='mx-5 mt-2 flex-col space-y-6 border-b-[0.2px] border-gray-300 pb-5'>
      <Text className='text-base font-bold'>But pha cung giao vien ngoi sao</Text>
      <Image source={{uri:'https://warmgun.com/wp-content/uploads/2021/10/banner-elearning.png'}} className='h-[230px] rounded-lg'/>
      
    </View>
  )
}

export default SpecialBanner