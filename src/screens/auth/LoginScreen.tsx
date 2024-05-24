import {
  LanguagueCheck,
  LoginButton,
  LoginForm,
  RegisterForm,
} from '@components/auth';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import { AuthStackScreenProps } from '@navigation/data';
import { Login } from '@services/api/auth/request';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
import { Box, Button, Image, Input, Link, Text, useToast } from 'native-base';
import React, { useCallback, useRef, useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useMutation } from 'react-query';
export function LoginScreen({
  navigation,
  route,
}: AuthStackScreenProps<'Login'>) {
  const sheetRef = useRef<BottomSheet>(null);
  const sheetRef1 = useRef<BottomSheet>(null);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [value, setValue] = useState<string>('');
  const snapPoints = ['30%'];
  const snapPoints1 = ['76%'];
  const handleSnapPress = useCallback((index: number) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleSnapPress1 = useCallback((index: number) => {
    sheetRef1.current?.snapToIndex(index);
  }, []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView className="bg-[#f9f9f9] h-full ">
          <View className=" flex-row mt-5 mx-5 justify-between">
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dftz2tmpm/image/upload/v1716476248/panda-vku/hdhrrucpoe5wexcf8usv.png',
              }}
              className="h-full w-32 ml-[-20px]"
            />
            <TouchableOpacity
              className="flex-row items-center space-x-2"
              onPress={() => {
                handleSnapPress1(0);
              }}
            >
              <Text className="text-black text-lg">Tiếng Việt</Text>
              <AntDesign name="down" size={15} />
            </TouchableOpacity>
          </View>
          <View className="">
            <View className="h-[340px] flex items-center justify-center">
              <Text className="text-md mb-4">Người đang học tập với Panda</Text>
              <Text className="text-5xl font-bold">91.311.901</Text>
            </View>
            <View className="mx-5 flex-col space-y-2">
              <LoginButton
                IconUri="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
                descript="Tiếp tục với Google"
                // bgColor="#1977f3"
                bgColor="white"
                txtColor="black"
                onPress={async () => {
                  // await navigation.navigate('Root');
                }}
              />
              {/* <LoginButton
                IconUri="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
                descript="Tiếp tục với Facebook"
                bgColor="#1977f3"
                txtColor="white"
              />
              <LoginButton
                IconUri="data:image/png;base64,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"
                descript="Tiếp tục với Apple"
                bgColor="black"
                txtColor="white"
              /> */}

              <TouchableOpacity
                className="h-14 rounded-xl w-full bg-transparent flex items-center justify-center mb-2"
                onPress={() => handleSnapPress(0)}
              >
                <Text className="text-lg font-semibold">
                  Sử dụng phương thức khác
                </Text>
              </TouchableOpacity>
              <Text className="text-md text-gray-500">
                Tự động đồng ý với{' '}
                <Text className="underline">Điều khoản sử dụng</Text> và{' '}
                <Text className="underline">
                  Điều khoản sử dụng thông tin cá nhân
                </Text>{' '}
                khi đăng ký.
              </Text>
            </View>
          </View>

          <BottomSheet
            ref={sheetRef}
            index={-1}
            snapPoints={isLogin ? ['30%'] : ['55%']}
            enablePanDownToClose={true}
            backdropComponent={renderBackdrop}
          >
            <BottomSheetView>
              {isLogin ? (
                <LoginForm setIsLogin={setIsLogin} navigation={navigation} />
              ) : (
                <RegisterForm setIsLogin={setIsLogin} navigation={navigation} />
              )}
            </BottomSheetView>
          </BottomSheet>

          <BottomSheet
            ref={sheetRef1}
            index={-1}
            snapPoints={snapPoints1}
            enablePanDownToClose={false}
            handleIndicatorStyle={{ backgroundColor: 'white' }}
            backdropComponent={renderBackdrop}
          >
            <BottomSheetView>
              <View className="flex-row mx-5">
                <Text className="text-xl font-bold flex-1 mt-5">
                  Ngôn Ngữ / Language
                </Text>
                <Feather
                  name="x"
                  size={30}
                  color={'black'}
                  onPress={() => sheetRef1.current?.close()}
                />
              </View>
              <View className="bg-gray-100 mt-6 mx-5 h-fit rounded-xl ">
                <LanguagueCheck
                  id="1"
                  lang="Tiếng Thái"
                  translang="ภาษาไทย"
                  value={value}
                  onValueChange={setValue}
                />
                <LanguagueCheck
                  id="2"
                  lang="Tiếng Indonesia"
                  translang="Bahasa Indonesia"
                  value={value}
                  onValueChange={setValue}
                />
                <LanguagueCheck
                  id="3"
                  lang="Tiếng Hàn"
                  translang="한국어"
                  value={value}
                  onValueChange={setValue}
                />
                <LanguagueCheck
                  id="4"
                  lang="Tiếng Nhật"
                  translang="日本語/にほんご"
                  value={value}
                  onValueChange={setValue}
                />
                <LanguagueCheck
                  id="5"
                  lang="Tiếng Anh"
                  translang="English"
                  value={value}
                  onValueChange={setValue}
                />
                <LanguagueCheck
                  id="6"
                  lang="Tiếng Việt"
                  translang="Tiếng Việt"
                  value={value}
                  onValueChange={setValue}
                />
                <LanguagueCheck
                  id="7"
                  lang="Tiếng Tây Ban Nha"
                  translang="Español"
                  value={value}
                  onValueChange={setValue}
                />
              </View>
            </BottomSheetView>
          </BottomSheet>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
}
