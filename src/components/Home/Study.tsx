import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import Tab from './Tab'
import Feather from '@expo/vector-icons/Feather';
import Slick from 'react-native-slick';
import { Feedback } from './Feedback';

const Study = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<string>('Giới thiệu');
  const tabs: string[] = ['Giới thiệu', 'Giáo viên', 'Đánh giá'];
  const tabContent: Record<string, JSX.Element> = {
    'Giới thiệu':
      
        <Image source={{ uri: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/431057758_326997760381002_7735400212537932300_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHV0PUxY33fe28oGXNFmIIT4Nxqwoxlt9rg3GrCjGW32iYrwlRlzQFOgIP5y9N8-Jm1K0JBCJCgaRW6laRAo6za&_nc_ohc=0uSx7-CAU7kAX--S6CT&_nc_ht=scontent.fdad3-1.fna&oh=03_AdQQVT3ebRdiKfGZNQyt8gTuPr0L56_PbB-tuWzMt6iL8w&oe=661B98B6' }}  className='w-fit h-[200px] rounded-xl' />,
    'Giáo viên': <Image source={{ uri: 'https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/405282475_3104960926302301_3011704467582704741_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEQla2Uae4YiWreaaazsthET66ZaMVJ8MxPrploxUnwzEjns2mpOx308VtWGBWfI6QkNGGgXQkyI31kiT34TcaM&_nc_ohc=oOc-8NDKJaoAX_81Wtp&_nc_ht=scontent.fdad3-1.fna&oh=00_AfCPbGcASJjg2z_hKdlH3EKla16eIQ3DMEt8DNCENRVJGg&oe=65F9F525' }} className='w-fit h-[200px] rounded-xl' />,
    'Đánh giá':
      <View>
        <View className='border-[0.5px] h-[200px] border-gray-400 rounded-xl'>
          <Slick showsPagination={false} loop={false} onIndexChanged={(index) => setActiveSlide(index)}>
            <View className='m-4'>
              <Feedback
                avaUri='https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/431057758_326997760381002_7735400212537932300_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHV0PUxY33fe28oGXNFmIIT4Nxqwoxlt9rg3GrCjGW32iYrwlRlzQFOgIP5y9N8-Jm1K0JBCJCgaRW6laRAo6za&_nc_ohc=0uSx7-CAU7kAX--S6CT&_nc_ht=scontent.fdad3-1.fna&oh=03_AdQQVT3ebRdiKfGZNQyt8gTuPr0L56_PbB-tuWzMt6iL8w&oe=661B98B6'
                name='Phuc 20cm'
                grade='12'
                time='3 thang'
                title='HongPhuc dep trai nhat VKU'
                content='yamete yamete yamete'
                tag1='Dep trai'
                tag2='Soai ca'
                tag3='Chim dai'
              />
            </View>
            <View className='m-4'>
              <Feedback
                avaUri='https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/431057758_326997760381002_7735400212537932300_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHV0PUxY33fe28oGXNFmIIT4Nxqwoxlt9rg3GrCjGW32iYrwlRlzQFOgIP5y9N8-Jm1K0JBCJCgaRW6laRAo6za&_nc_ohc=0uSx7-CAU7kAX--S6CT&_nc_ht=scontent.fdad3-1.fna&oh=03_AdQQVT3ebRdiKfGZNQyt8gTuPr0L56_PbB-tuWzMt6iL8w&oe=661B98B6'
                name='Phuc 20cm'
                grade='12'
                time='3 thang'
                title='HongPhuc dep trai nhat VKU'
                content='yamete yamete yamete'
                tag1='Dep trai'
                tag2='Soai ca'
                tag3='Chim dai'
              />
            </View>
            <View className='m-4'>
              <Feedback
                avaUri='https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/431057758_326997760381002_7735400212537932300_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHV0PUxY33fe28oGXNFmIIT4Nxqwoxlt9rg3GrCjGW32iYrwlRlzQFOgIP5y9N8-Jm1K0JBCJCgaRW6laRAo6za&_nc_ohc=0uSx7-CAU7kAX--S6CT&_nc_ht=scontent.fdad3-1.fna&oh=03_AdQQVT3ebRdiKfGZNQyt8gTuPr0L56_PbB-tuWzMt6iL8w&oe=661B98B6'
                name='Phuc 20cm'
                grade='12'
                time='3 thang'
                title='HongPhuc dep trai nhat VKU'
                content='yamete yamete yamete'
                tag1='Dep trai'
                tag2='Soai ca'
                tag3='Chim dai'
              />
            </View>


          </Slick>
          <View className='flex-row items-center top-7'>
            <View className='flex-row flex-1 ml-2'>
              <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: activeSlide === 0 ? '#fe6505' : 'gray', margin: 5 }} />
              <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: activeSlide === 1 ? '#fe6505' : 'gray', margin: 5 }} />
              <View style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: activeSlide === 2 ? '#fe6505' : 'gray', margin: 5 }} />
            </View>

          </View>
        </View>


      </View>
  };
  return (
    <View className="mx-5 border-b-[0.5px] border-gray-200 mb-4">
      <View className="flex-row">
        <View className='flex-row items-center pr-2'><Text className="font-extrabold text-lg text-red-500">Study</Text></View>
        {['Giới thiệu', 'Giáo viên', 'Đánh giá'].map((tab) => (
          <Tab key={tab} title={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </View>
      <View className='flex-col space-y-7'>
        <View className="">
          {tabContent[activeTab]}
        </View>
        <View className='flex-row items-center justify-center space-x-2 left-28 -top-5'>
          <Text className='text-base font-semibold'>Tim hieu them</Text>
          <Feather name='chevron-right' color={'gray'} size={20} />
        </View>
      </View>

    </View>
  )
}

export default Study