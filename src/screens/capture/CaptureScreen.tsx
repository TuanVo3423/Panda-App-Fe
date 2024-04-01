import { AntDesign } from '@expo/vector-icons';
import { headerStyles } from '@theme/globalStyles';
import * as ImagePicker from 'expo-image-picker';
import { Button, Center, HStack, Image, Text, VStack, View } from 'native-base';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function CaptureScreen() {
  const [image, setImage] = useState<string>('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (result.assets === null) return;
    else {
      setImage(result.assets[0].uri);
    }
  };
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (result.assets === null) return;
    else {
      setImage(result.assets[0].uri);
    }
  };

  const renderImage = () => {
    if (image) {
      return (
        <View maxH={500} position="relative">
          <Image
            source={{ uri: image }}
            w="full"
            maxH={500}
            h="full"
            alt="problem_image"
          />
          <Button
            background="blue.600"
            leftIcon={
              <Feather
                onPress={() => setImage('')}
                name="refresh-ccw"
                size={22}
                color="white"
              />
            }
            position="absolute"
            bottom={2}
            right={1}
          ></Button>
        </View>
      );
    }
    return (
      <VStack
        w="full"
        mt={4}
        h={500}
        p={4}
        background="white"
        rounded="md"
        borderWidth="2px"
        borderStyle={'dashed'}
        alignItems="center"
        space={5}
      >
        <TouchableOpacity onPress={pickImage}>
          <Image
            backgroundColor="transparent"
            source={require('./upload_image.png')}
            w={200}
            h={200}
            rounded="full"
            alt="img_upload"
          />
        </TouchableOpacity>
        <Text
          onPress={pickImage}
          fontSize="20px"
          fontWeight="bold"
          color="blue.600"
        >
          Upload you photo
        </Text>
        <Text fontSize="24px" fontWeight="extrabold">
          OR
        </Text>
        <Button
          rounded="xl"
          onPress={takePhoto}
          variant="outline"
          background="blue.600"
        >
          <Text fontSize="20px" fontWeight="bold" color="white">
            Take a photo
          </Text>
        </Button>
      </VStack>
    );
  };

  return (
    <View>
      <View style={headerStyles.style}>
        <Text className="text-lg font-semibold">Capture Question</Text>
        <Button isDisabled={image ? false : true} variant="outline">
          <Text fontSize="16px" fontWeight="bold" color="blue.600">
            Continue
          </Text>
        </Button>
      </View>
      <View h="full" p={4}>
        {renderImage()}
        {image && (
          <HStack mt={4} justifyContent="space-between">
            <Button
              background="blue.600"
              maxH={20}
              variant="outline"
              leftIcon={<AntDesign name="camerao" size={24} color="white" />}
              onPress={takePhoto}
            >
              <Text fontSize="16px" fontWeight="bold" color="white">
                Re-Take photo
              </Text>
            </Button>
            <Button
              background="blue.600"
              maxH={20}
              variant="outline"
              leftIcon={
                <AntDesign name="clouduploado" size={24} color="white" />
              }
              onPress={pickImage}
            >
              <Text fontSize="16px" fontWeight="bold" color="white">
                Re-Upload photo
              </Text>
            </Button>
          </HStack>
        )}
      </View>
    </View>
  );
}
