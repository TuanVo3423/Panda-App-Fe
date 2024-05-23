import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { AppStackScreenProps } from '@navigation/data';

import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
import { ANOMYMOUS_AVATAR } from '@constants/index';

export const ProfileScreen = ({
  navigation,
  route,
}: AppStackScreenProps<'Profile'>) => {
  const { UserProfile } = useAuthenticatedStore();
  const handleEditProfilePress = () => {
    navigation.navigate('MyProfile');
  };
  return (
    <SafeAreaView className=" bg-white">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: 10,
          backgroundColor: 'white',
        }}
      >
        <View className="  rounded-t-lg  px-3 bg-[#f1f1f1] h-20 w-100 justify-between  flex-row  items-center  mx-5">
          <View className="flex-row items-center">
            <Image
              source={{
                uri: UserProfile.user?.avatar
                  ? UserProfile.user?.avatar
                  : ANOMYMOUS_AVATAR,
              }}
              className="h-10 w-10 mr-2 rounded-full "
            />
            <View className="ms-2px">
              <Text className="font-bold"> {UserProfile.user?.name}</Text>
              <Text> Grade 12</Text>
            </View>
          </View>
          <TouchableOpacity
            className=" rounded-md  border-[0.5px] border-gray-400 bg-[#62929E] h-9 w-24 justify-center items-center "
            onPress={handleEditProfilePress}
          >
            <Text className="font-bold text-white">Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="bg-[#f1f1f1] rounded-b-lg h-10 w-100 px-3 mx-5 flex-row ">
          <MaterialIcons name="attach-money" size={24} color="black" />
          <Text className=" font-bold flex-1 "> My Coins</Text>
          <Text className="mr-5 text-[#62929E] font-bold font-medium">0</Text>
          <AntDesign
            name="right"
            size={20}
            color="#62929E"
            className=" flex-end"
          />
        </TouchableOpacity>
        <TouchableOpacity className=" mx-5 h-10 w-100  flex-row  items-center  pt-5 ">
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dftz2tmpm/image/upload/v1716476248/panda-vku/hdhrrucpoe5wexcf8usv.png',
            }}
            className=" object-cover h-5 w-10"
          />
          <Text className="ml-2 flex-1 font-medium"> Ad-free Membership</Text>
          <View className="justify-center items-center h-5 w-20 rounded-full mr-5 bg-cyan-50 ">
            <Text className=" font-bold text-cyan-400">Free Trial</Text>
          </View>

          <AntDesign
            name="right"
            size={20}
            color="orange"
            className=" flex-end"
          />
        </TouchableOpacity>
        <Text className="mx-5 pt-2 pb-5 ">
          Try ad-free membership for free.
        </Text>

        <TouchableOpacity className="bg-[#f1f1f1] h-20 w-100 mx-5 px-5 justify-center items-center flex-row rounded-md ">
          <View className="flex-1 h-10 w-20">
            <Text className="font-bold">Ad-Free Membership</Text>
            <Text className="font-light">Try it FREE</Text>
          </View>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dftz2tmpm/image/upload/v1716476248/panda-vku/hdhrrucpoe5wexcf8usv.png',
            }}
            className=" h-10 w-20 flex-end"
          />
        </TouchableOpacity>
        <View className="border-t-[10px] rounded-lg border-[#f1f1f1] mx-5 w-100 mt-5 "></View>

        <View className="p-5">
          <Text className="text-lg font-bold">My questions</Text>
          <TouchableOpacity className="pt-5 flex-row items-center ">
            <Text className="text-base  flex-1">Recent Searchs</Text>
            <AntDesign
              name="right"
              size={20}
              color="gray"
              className=" flex-end"
            />
          </TouchableOpacity>
          <TouchableOpacity className="pt-5 flex-row items-center ">
            <Text className="text-base  flex-1">My Question (Q&A)</Text>
            <AntDesign
              name="right"
              size={20}
              color="gray"
              className=" flex-end"
            />
          </TouchableOpacity>
        </View>
        <View className="pt-7 px-5 pb-5 ">
          <Text className="text-lg font-bold">My activitives</Text>
          <TouchableOpacity
            className="pt-5 flex-row items-center "
            onPress={() => navigation.navigate('Activity')}
          >
            <Text className="text-base  flex-1">
              My Activities in Community
            </Text>
            <AntDesign
              name="right"
              size={20}
              color="gray"
              className=" flex-end"
            />
          </TouchableOpacity>
          <TouchableOpacity className="pt-5 flex-row items-center ">
            <Text className="text-base  flex-1">Calculator</Text>
            <AntDesign
              name="right"
              size={20}
              color="gray"
              className=" flex-end"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
