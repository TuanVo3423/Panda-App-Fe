import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { CategoryCards } from './CategoryCards'

const Category = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className='bg-gray-100'>
      <View className='flex-row px-5 items-center space-x-5 py-5'>
        <CategoryCards cardName='ABC' urilink='https://i.pinimg.com/originals/31/7b/0d/317b0da6eb6e90d77d39d1ca36b8d11b.jpg'/>
        <CategoryCards cardName='ABC' urilink='https://i.pinimg.com/originals/31/7b/0d/317b0da6eb6e90d77d39d1ca36b8d11b.jpg'/>
        <CategoryCards cardName='ABC' urilink='https://i.pinimg.com/originals/31/7b/0d/317b0da6eb6e90d77d39d1ca36b8d11b.jpg'/>
        <CategoryCards cardName='ABC' urilink='https://i.pinimg.com/originals/31/7b/0d/317b0da6eb6e90d77d39d1ca36b8d11b.jpg'/>
        <CategoryCards cardName='ABC' urilink='https://i.pinimg.com/originals/31/7b/0d/317b0da6eb6e90d77d39d1ca36b8d11b.jpg'/>
        <CategoryCards cardName='ABC' urilink='https://i.pinimg.com/originals/31/7b/0d/317b0da6eb6e90d77d39d1ca36b8d11b.jpg'/>
        <CategoryCards cardName='ABC' urilink='https://i.pinimg.com/originals/31/7b/0d/317b0da6eb6e90d77d39d1ca36b8d11b.jpg'/>
      </View>
    </ScrollView>
  )
}

export default Category