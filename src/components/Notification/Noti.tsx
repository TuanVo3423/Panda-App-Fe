import { View, Text, Image } from 'react-native'
import React from 'react'

const Noti = () => {
  return (
    <View className='border-b-[0.5px] border-gray-300'>
      <View className='flex-row items-center p-5 space-x-5'>
        <Image source={{uri:'https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/217582971_10160287216518265_1458845262761291760_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFqyDjxJyfevYvKht5eTFSqJkTHrhZf9WkmRMeuFl_1aahLzJLP8Ntx_Lry3HX_ESdewjdB6zkCNi8yLKtUSIZr&_nc_ohc=cb7hIiQnS8UAX_CgZ3e&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDY7ZYZSjE6vS_6h006rZr2kZBz2cYk74QvwbBrKK6KVQ&oe=6601C3F8'}} className='rounded-full h-16 w-16'/>
        <View className='flex-col space-y-1'>
            <Text className='text-sm font-bold'>Huynh Cong Phap gui cho ban 1 thong bao</Text>
            <Text className='text-sm'>Doc thong bao nao cac em</Text>
            <Text className='text-xs text-gray-400'>19:05 ngay 29 thang 2 nam 2024</Text>
        </View>
      </View>
    </View>
  )
}

export default Noti