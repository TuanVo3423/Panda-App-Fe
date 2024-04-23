import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import Tab from './Tab';
import Feather from '@expo/vector-icons/Feather';
import Slick from 'react-native-slick';
import { Feedback } from './Feedback';

const Study = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<string>('Giới thiệu');
  const tabs: string[] = ['Giới thiệu', 'Giáo viên', 'Đánh giá'];
  const tabContent: Record<string, JSX.Element> = {
    'Giới thiệu': (
      <Image
        source={{
          uri: 'https://warmgun.com/wp-content/uploads/2021/10/banner-elearning.png',
        }}
        className="w-fit h-[200px] rounded-xl"
      />
    ),
    'Giáo viên': (
      <Image
        source={{
          uri: 'https://warmgun.com/wp-content/uploads/2021/10/banner-elearning.png',
        }}
        className="w-fit h-[200px] rounded-xl"
      />
    ),
    'Đánh giá': (
      <View>
        <View className="border-[0.5px] h-[200px] border-gray-400 rounded-xl">
          <Slick
            showsPagination={false}
            loop={false}
            onIndexChanged={(index) => setActiveSlide(index)}
          >
            <View className="m-4">
              <Feedback
                avaUri="https://warmgun.com/wp-content/uploads/2021/10/banner-elearning.png"
                name="Phuc 20cm"
                grade="12"
                time="3 thang"
                title="HongPhuc dep trai nhat VKU"
                content="yamete yamete yamete"
                tag1="Dep trai"
                tag2="Soai ca"
                tag3="Chim dai"
              />
            </View>
            <View className="m-4">
              <Feedback
                avaUri="https://warmgun.com/wp-content/uploads/2021/10/banner-elearning.png"
                name="Phuc 20cm"
                grade="12"
                time="3 thang"
                title="HongPhuc dep trai nhat VKU"
                content="yamete yamete yamete"
                tag1="Dep trai"
                tag2="Soai ca"
                tag3="Chim dai"
              />
            </View>
            <View className="m-4">
              <Feedback
                avaUri="https://warmgun.com/wp-content/uploads/2021/10/banner-elearning.png"
                name="Phuc 20cm"
                grade="12"
                time="3 thang"
                title="HongPhuc dep trai nhat VKU"
                content="yamete yamete yamete"
                tag1="Dep trai"
                tag2="Soai ca"
                tag3="Chim dai"
              />
            </View>
          </Slick>
          <View className="flex-row items-center top-7">
            <View className="flex-row flex-1 ml-2">
              <View
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 5,
                  backgroundColor: activeSlide === 0 ? '#62929E' : 'gray',
                  margin: 5,
                }}
              />
              <View
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 5,
                  backgroundColor: activeSlide === 1 ? '#62929E' : 'gray',
                  margin: 5,
                }}
              />
              <View
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: 5,
                  backgroundColor: activeSlide === 2 ? '#62929E' : 'gray',
                  margin: 5,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    ),
  };
  return (
    <View className="mx-5 border-b-[0.5px] border-gray-200 mb-4">
      <View className="flex-row items-center">
        <View className="flex-row items-center justify-center pr-2 mb-1">
          <Text className="font-bold text-lg text-[#62929E]">Study</Text>
        </View>
        {['Giới thiệu', 'Giáo viên', 'Đánh giá'].map((tab) => (
          <Tab
            key={tab}
            title={tab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </View>
      <View className="flex-col space-y-7">
        <View className="">{tabContent[activeTab]}</View>
        <View className="flex-row items-center justify-center space-x-2 left-28 -top-5">
          <Text className="text-base font-semibold">Tim hieu them</Text>
          <Feather name="chevron-right" color={'gray'} size={20} />
        </View>
      </View>
    </View>
  );
};

export default Study;
