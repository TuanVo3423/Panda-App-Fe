import React from 'react';
import { Text, TouchableOpacity, View, Image, Button } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { RootTabScreenProps } from '@navigation/data';
import { headerStyles } from '@theme/globalStyles';
import { ScrollView } from 'react-native';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
import { ANOMYMOUS_AVATAR } from '@constants/index';

export const MenuScreen = ({
  navigation,
  route,
}: RootTabScreenProps<'Menu'>) => {
  const { UserProfile } = useAuthenticatedStore();
  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };
  const handleSearchPress = () => {
    navigation.navigate('Capture');
  };
  const handleAskCommunityPress = () => {
    navigation.navigate('FormPost');
  };
  const handleCommunityPress = () => {
    navigation.navigate('Community');
  };
  return (
    <View className="bg-white">
      <View
        style={headerStyles.style}
        className="bg-white flex-row items-center mt-3 px-5 py-3 border-b-[0.6px] border-gray-300"
      >
        <Text className="text-2xl flex-1 font-semibold">Menu</Text>
        <EvilIcons name="gear" size={25} />
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
          paddingTop: 10,
          backgroundColor: 'white',
        }}
      >
        <View className="rounded-xl px-5 mx-5 py-5 bg-[#f1f1f1] h-22 w-100 justify-between flex-row  items-center">
          <View className="flex-row items-center space-x-2">
            <Image
              source={{
                uri: UserProfile.user?.avatar
                  ? UserProfile.user?.avatar
                  : ANOMYMOUS_AVATAR,
              }}
              className="h-16 w-16 mr-2 rounded-full "
            />
            <Text className="ms-2px text-base font-semibold">
              {UserProfile.user?.name}
            </Text>
          </View>
          <TouchableOpacity
            className=" rounded-lg border-[0.5px] border-gray-400 px-2 bg-[#62929E] h-9 w-25 justify-center items-center "
            onPress={handleProfilePress}
          >
            <Text className="text-xs font-bold text-white">Trang ca nhan</Text>
          </TouchableOpacity>
        </View>
        <View className=" bg-white rounded-lg flex-row border-b-[10px] border-[#f1f1f1] pb-10 justify-center h-30 w-100 m-5  ">
          <TouchableOpacity className="bg-[#f1f1f1] rounded-xl h-20 w-50 mr-5 flex-1 items-center justify-center">
            <View className="h-5 w-20 items-center ">
              {/*  */}
              <Image
                source={{
                  uri: 'https://res.cloudinary.com/dftz2tmpm/image/upload/v1716476248/panda-vku/hdhrrucpoe5wexcf8usv.png',
                }}
                className="object-cover h-5 w-10"
              />
            </View>
            <Text className="font-semibold mt-2"> Ad-free Membership</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#f1f1f1] rounded-xl flex-1 items-center justify-center">
            <MaterialIcons name="attach-money" size={20} color="black" />
            <Text className=" font-semibold mt-2"> Coin Membership</Text>
          </TouchableOpacity>
        </View>
        <View className="px-5 mb-5">
          <Text className="text-lg font-bold ">Question</Text>
          <TouchableOpacity
            className="pt-5 flex-row items-center "
            onPress={handleSearchPress}
          >
            <Text className="text-base  flex-1">Search</Text>
            <AntDesign
              name="right"
              size={20}
              color="gray"
              className=" flex-end"
            />
          </TouchableOpacity>
          <TouchableOpacity className="pt-5 flex-row items-center ">
            <Text className="text-base  flex-1">Ask a teacher</Text>
            <AntDesign
              name="right"
              size={20}
              color="gray"
              className=" flex-end"
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="pt-5 flex-row items-center "
            onPress={handleAskCommunityPress}
          >
            <Text className="text-base  flex-1">Ask a community</Text>
            <AntDesign
              name="right"
              size={20}
              color="gray"
              className=" flex-end"
            />
          </TouchableOpacity>
        </View>
        <View className="p-5">
          <Text className="text-lg font-bold">Tools</Text>
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
        <View className="p-5">
          <Text className="text-lg font-bold">Social</Text>
          <TouchableOpacity
            className="pt-5 flex-row items-center "
            onPress={handleCommunityPress}
          >
            <Text className="text-base  flex-1">Community</Text>
            <AntDesign
              name="right"
              size={20}
              color="gray"
              className=" flex-end"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
