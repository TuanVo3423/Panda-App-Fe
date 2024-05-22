import { AntDesign, Feather } from '@expo/vector-icons';
import { headerStyles } from '@theme/globalStyles';
import { handleUploadImage } from '@utils/cloudinary';
import * as ImagePicker from 'expo-image-picker';
import {
  Button,
  HStack,
  Image,
  Text,
  VStack,
  View,
  useToast,
} from 'native-base';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import { RootTabScreenProps } from '@navigation/data';
import { useGetCaptureResult } from '@services/api/capture/queries';
import { getCaptureResult, getOCR } from '@services/api/capture/request';
function cleanString(inputString: string) {
  // Loại bỏ các ký tự \\, \n
  let cleanedString = inputString.replace(/\\n|\\/g, '');
  return cleanedString;
}

export function CaptureScreen({ navigation }: RootTabScreenProps<'Capture'>) {
  const [image, setImage] = useState<string>('');
  const [ImagePickerObject, setImagePickerObject] =
    useState<ImagePicker.ImagePickerResult>();
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const toast = useToast();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
      exif: true,
    });

    if (result.assets === null) return;
    else {
      setImagePickerObject(result);
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
      setImagePickerObject(result);
      setImage(result.assets[0].uri);
    }
  };

  const handleUploadToCloudinary = async () => {
    try {
      setIsUploadingImage(true);
      const data = await handleUploadImage(
        ImagePickerObject as ImagePicker.ImagePickerSuccessResult
      );
      const text = await getOCR(data.url);
      const PostRelated = await getCaptureResult({
        query: text.input,
      });

      navigation.navigate('PreviewCaptureResult', {
        image_url: data.url,
        input: text.input,
        steps: text.steps,
        data: PostRelated,
      });
      // if (!isLoading) {
      // }

      // for (let block of result.blocks) {
      //   // console.log('Block text:', block.text);
      //   // console.log('Block frame:', block.frame);

      //   for (let line of block.lines) {
      //     // console.log('Line text:', line.text);
      //     // console.log('Line frame:', line.frame);
      //   }
      // }
      // after have text, we call api and navigate to next screen with props
      // toast.show({
      //   description: `Upload Scuccessful. Image URL: ${data.url}`,
      // });
      setIsUploadingImage(false);
    } catch (err) {
      // console.log('err: ', err);
    }
  };

  const renderImage = () => {
    if (image) {
      return (
        <View maxH={500} position="relative">
          <Image
            resizeMode="contain"
            source={{ uri: image }}
            w="full"
            h="full"
            alt="problem_image"
          />
          <Button
            background="#62929E"
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
          color="#62929E"
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
          background="#62929E"
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
        <Button
          onPress={() => handleUploadToCloudinary()}
          isLoading={isUploadingImage}
          variant="outline"
        >
          <Text fontSize="16px" fontWeight="bold" color="#62929E">
            Continue
          </Text>
        </Button>
      </View>
      <View h="full" p={4}>
        {renderImage()}
        {image && (
          <HStack mt={4} justifyContent="space-between">
            <Button
              background="#62929E"
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
              background="#62929E"
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
