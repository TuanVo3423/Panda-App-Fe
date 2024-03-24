import React from 'react';
import { Text, TouchableOpacity, View, Image, Button } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export const MenuScreen = (props: any) => {
  const { navigation } = props;
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
    <SafeAreaView className="bg-white ">
      <View className="rounded-md px-3 bg-gray-100 h-20 w-100 justify-between  flex-row  items-center  mx-5   ">
        <View className="flex-row items-center ">
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/004/487/805/original/silhouette-of-a-male-head-in-profile-on-a-white-background-avatar-design-free-vector.jpg',
            }}
            className="h-10 w-10 mr-2 rounded-full "
          />
          <Text className="ms-2px font-bold">Rondeptrai</Text>
        </View>
        <TouchableOpacity
          className=" rounded-md  border-2 bg-gray-200 h-10 w-20 justify-center items-center "
          onPress={handleProfilePress}
        >
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
      <View className=" bg-white flex-row justify-center h-30 w-100  m-5  ">
        <TouchableOpacity className="bg-gray-100 rounded-md h-20 w-50 mr-5 flex-1 items-center justify-center">
          <View className="h-5 w-20 items-center ">
            <Image
              source={{
                uri: 'https://cdn.aitimes.kr/news/photo/202110/22767_34176_2339.jpg',
              }}
              className="object-cover h-5 w-10"
            />
          </View>
          <Text className="font-bold mt-2"> Ad-free Membership</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-gray-100 rounded-md flex-1 items-center justify-center">
          <MaterialIcons name="attach-money" size={20} color="black" />
          <Text className=" font-bold mt-2"> Coin Membership</Text>
        </TouchableOpacity>
      </View>
      <View className="p-5">
        <Text className="text-lg font-bold ">Question</Text>
        <TouchableOpacity
          className="pt-5 flex-row items-center "
          onPress={handleSearchPress}
        >
          <Text className="text-lg  flex-1">Search</Text>
          <AntDesign
            name="right"
            size={20}
            color="gray"
            className=" flex-end"
          />
        </TouchableOpacity>
        <TouchableOpacity className="pt-5 flex-row items-center ">
          <Text className="text-lg  flex-1">Ask a teacher</Text>
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
          <Text className="text-lg  flex-1">Ask a community</Text>
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
          <Text className="text-lg  flex-1">Calculator</Text>
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
          <Text className="text-lg  flex-1">Community</Text>
          <AntDesign
            name="right"
            size={20}
            color="gray"
            className=" flex-end"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
