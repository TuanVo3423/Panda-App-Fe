import { AppStackScreenProps } from '@navigation/data';
import { Button } from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { headerStyles } from '@theme/globalStyles';
export const MyProfileScreen = ({
  navigation,
  route,
}: AppStackScreenProps<'MyProfile'>) => {
  const [username, setUsername] = React.useState('');
  const [curriculum, setCurriculum] = React.useState('');
  const [statusmessage, setStatusmessage] = React.useState('');
  const [image, setImage] = React.useState<string>('');

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
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="h-40 w-100 bg-white rounded-2xl mx-5 border-gray-300 border-2 justify-center items-center mt-4">
        <TouchableOpacity onPress={() => pickImage()}>
          <Image
            source={{
              uri: image
                ? image
                : 'https://th.bing.com/th/id/OIP.89QM06UFSCJIYwMiuqxEXQAAAA?w=360&h=422&rs=1&pid=ImgDetMain',
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
        placeholder="Rondeptrai"
        onChangeText={(newText) => setUsername(newText)}
        value={username}
      ></TextInput>
      <Text className="font-semibold text-lg mx-4 pt-2 "> Curriculum</Text>
      <TextInput
        className="h-14 w-100 rounded-2xl bg-white mx-5 my-2 border-2 border-gray-300 px-3 text-gray-400 font-medium"
        placeholder="12th"
        onChangeText={(newText) => setCurriculum(newText)}
        value={curriculum}
      ></TextInput>
      <Text className="font-semibold text-lg mx-4 pt-2 "> Status message</Text>
      <TextInput
        className="h-14 w-100 rounded-2xl bg-white mx-5 my-2 border-2 border-gray-300 px-3 text-gray-400 font-medium"
        placeholder="Enter status message"
        onChangeText={(newText) => setStatusmessage(newText)}
        value={statusmessage}
      ></TextInput>
      <Text className="font-semibold text-lg mx-4 pt-2 "> Email</Text>
      <Text className="font-semibold text-lg mx-5 pt-2 ">
        tuanvv.21it@vku.udn.vn
      </Text>
      <View className=" flex-row mx-4 justify-end items-center ">
        <Button className="flex items-center justify-center rounded-2xl h-10 w-20 bg-[#62929E]">
          <Text className="font-bold text-white">Save</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
