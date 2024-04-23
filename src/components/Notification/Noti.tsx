import { View, Text, Image } from 'react-native';
import React from 'react';

const Noti = () => {
  return (
    <View className="border-b-[0.5px] border-gray-300">
      <View className="flex-row items-center p-5 space-x-5">
        <Image
          source={{
            uri: 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj',
          }}
          className="rounded-full h-16 w-16"
        />
        <View className="flex-col space-y-1">
          <Text className="text-sm w-[90%] font-bold">
            Huynh Cong Phap gui cho ban 1 thong bao
          </Text>
          <Text className="text-sm">Doc thong bao nao cac em</Text>
          <Text className="text-xs text-gray-400">
            19:05 ngay 29 thang 2 nam 2024
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Noti;
