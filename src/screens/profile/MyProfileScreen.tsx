import { AppStackScreenProps } from '@navigation/data';
import { Box, Button, Text, useToast } from 'native-base';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { headerStyles } from '@theme/globalStyles';
import { useMutation } from 'react-query';
import { UpdateProfile } from '@services/api/auth/request';
import { ANOMYMOUS_AVATAR } from '@constants/index';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
import { handleUploadImage } from '@utils/cloudinary';

export const MyProfileScreen = ({
  navigation,
  route,
}: AppStackScreenProps<'MyProfile'>) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [image, setImage] = React.useState<string>('');
  const [ImagePickerObject, setImagePickerObject] =
    useState<ImagePicker.ImagePickerResult>();
  const toast = useToast();
  const { UserProfile, setUserProfile } = useAuthenticatedStore();
  const isDisabled = username === '' || email === '';

  const {
    data,
    isLoading,
    mutateAsync: handleUpdateProfile,
  } = useMutation(
    'UpdateProfile',
    async () => {
      const res = await UpdateProfile({
        data: {
          name: username,
          avatar: image,
          email: email,
          id: UserProfile.user?.id as string,
        },
      });
      return res;
    },
    {
      onSuccess: (data) => {
        setLoading(false);
        setUserProfile({
          user: data,
          token: UserProfile.token,
        });
        toast.show({
          render: () => {
            return (
              <Box bg="#62929E" px="2" py="1" rounded="sm" color="white" mb={5}>
                <Text color="white">Update Profile Success</Text>
              </Box>
            );
          },
        });
      },
      onError: (err) => {
        console.log('err: ', err);
      },
    }
  );
  const handleUploadToCloudinary = async () => {
    try {
      setLoading(true);
      const data = await handleUploadImage(
        ImagePickerObject as ImagePicker.ImagePickerSuccessResult
      );
      setImage(data.url);
    } catch (err) {
      // console.log('err: ', err);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      exif: true,
    });

    if (result.assets === null) return;
    else {
      setImagePickerObject(result);
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="h-40 w-100 bg-white rounded-2xl mx-5 border-gray-300 border-2 justify-center items-center mt-4">
        <TouchableOpacity onPress={() => pickImage()}>
          <Image
            source={{
              uri: UserProfile.user?.avatar
                ? UserProfile.user?.avatar
                : ANOMYMOUS_AVATAR,
            }}
            className=" w-20 h-20 rounded-full"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="font-medium"> Change Photo</Text>
        </TouchableOpacity>
      </View>
      <Text className="font-semibold text-lg mx-4 pt-5 "> Username</Text>
      <TextInput
        className="h-14 w-100 rounded-2xl bg-white mx-5 my-2 border-2 border-gray-300 px-3 text-gray-400 font-medium"
        placeholder={UserProfile.user?.name}
        onChangeText={(newText) => setUsername(newText)}
        value={username}
      ></TextInput>
      <Text className="font-semibold text-lg mx-4 pt-2 "> Email</Text>
      <TextInput
        className="h-14 w-100 rounded-2xl bg-white mx-5 my-2 border-2 border-gray-300 px-3 text-gray-400 font-medium"
        placeholder={UserProfile.user?.email || 'Enter Email'}
        onChangeText={(newText) => setEmail(newText)}
        value={email}
      ></TextInput>
      {/* <Text className="font-semibold text-lg mx-4 pt-2 "> Status message</Text> */}
      {/* <TextInput
        className="h-14 w-100 rounded-2xl bg-white mx-5 my-2 border-2 border-gray-300 px-3 text-gray-400 font-medium"
        placeholder="Enter status message"
        onChangeText={(newText) => setStatusmessage(newText)}
        value={statusmessage}
      ></TextInput> */}
      {/* <Text className="font-semibold text-lg mx-4 pt-2 "> Email</Text>
      <Text className="font-semibold text-lg mx-5 pt-2 ">
        {UserProfile.user?.email || 'Enter email'}
      </Text> */}
      <View className=" flex-row mx-4 justify-end items-center ">
        <Button
          isLoading={loading}
          isDisabled={isDisabled}
          onPress={async () => {
            await handleUploadToCloudinary();
            await handleUpdateProfile();
          }}
          className="flex items-center justify-center rounded-2xl h-10 w-20 bg-[#62929E]"
        >
          <Text className="font-bold text-white">Save</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
