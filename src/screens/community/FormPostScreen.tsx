import { FormSection } from '@components/community';
import { TopicFilters } from '@components/community/data';
import { TYPE_POST } from '@constants/index';
import { EvilIcons, MaterialIcons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { AppStackScreenProps } from '@navigation/data';
import { createPosts } from '@services/api/posts/request';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
import { handleUploadImage } from '@utils/cloudinary';
import * as ImagePicker from 'expo-image-picker';
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  Radio,
  Stack,
  Text,
  useToast,
} from 'native-base';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
export const FormPostScreen = ({
  route,
  navigation,
}: AppStackScreenProps<'FormPost'>) => {
  const [ImagePickerObject, setImagePickerObject] =
    useState<ImagePicker.ImagePickerResult>();
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');
  const { UserProfile } = useAuthenticatedStore();
  // const [value, setValue] = React.useState<string>(TYPE_POST.PROBLEM);
  const [data, setData] = useState<{
    title: string;
    content: string;
    questionContent: string;
    type: string;
    image_buffering: string;
  }>({
    title: '',
    content: '',
    questionContent: '',
    type: '0',
    image_buffering: '',
  });
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
  const handleUploadToCloudinary = async () => {
    try {
      setLoading(true);
      const dataPicker = await handleUploadImage(
        ImagePickerObject as ImagePicker.ImagePickerSuccessResult
      );
      setData({
        ...data,
        image_buffering: dataPicker.url,
      });
    } catch (err) {
      // console.log('err: ', err);
    }
  };
  const isDisabled =
    data.title === '' ||
    data.content === '' ||
    data.questionContent === '' ||
    data.type === '';
  // const bottomSheetModalChooseTopicRef = useRef<BottomSheetModal>(null);
  // const [topicIndex, setTopicIndex] = useState<number>(-1);
  const queryClient = useQueryClient();

  const { mutateAsync: handleUploadPost, isSuccess } = useMutation(
    async () => {
      const edit_data = { ...data, type: [data.type] };
      const res = await createPosts(edit_data, UserProfile.token as string);
      return res;
    },
    {
      onSuccess: (data) => {
        const edit = {
          ...data,
          User: {
            name: UserProfile?.user?.name as string,
            avatar: UserProfile?.user?.avatar as string,
          },
          Comment: [],
        };
        queryClient.setQueryData(['getPosts'], (oldData: any) => {
          return [...oldData, edit];
        });
        setLoading(false);
        toast.show({
          render: () => {
            return (
              <Box bg="#62929E" px="2" py="1" rounded="sm" color="white" mb={5}>
                <Text color="white">Create Post Success!</Text>
              </Box>
            );
          },
        });
        navigation.goBack();
      },
      onError(error: any) {
        console.log(error);
      },
    }
  );

  const renderNameFile = () => {
    if (image) {
      const array = image.split('/');
      return array[array.length - 1];
    }
    return '';
  };
  const toast = useToast();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}
    >
      <Stack>
        {/* header */}
        <HStack
          paddingTop="10px"
          paddingRight="10px"
          paddingBottom="5px"
          paddingLeft="5px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            onPress={() => navigation.goBack()}
            background="white"
            p={0}
            leftIcon={<EvilIcons name="close" size={28} color="black" />}
          />
          <Heading size="md">Upload Form</Heading>
          <Button
            isLoading={loading}
            isDisabled={isDisabled}
            onPress={async () => {
              await handleUploadToCloudinary();
              await handleUploadPost();
            }}
            variant="outline"
          >
            <Text fontSize="16px" fontWeight="semibold">
              Upload
            </Text>
          </Button>
        </HStack>
        <Stack h="full" px={4} space={4}>
          <HStack
            py={2}
            borderBottomWidth="1px"
            borderTopWidth="1px"
            borderColor="gray.200"
            alignItems="center"
          >
            <Stack w="full" space={2} background="white">
              <Text fontSize="16px" fontWeight="semibold">
                Please select a topic.
              </Text>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={data.type}
                onChange={(nextValue) => {
                  setData({ ...data, type: nextValue });
                }}
              >
                <Radio value={TYPE_POST.STUDY} my={1}>
                  Study
                </Radio>
                <Radio value={TYPE_POST.PROBLEM} my={1}>
                  Problem
                </Radio>
              </Radio.Group>
              {/* <Input
                size="md"
                placeholder="Hãy điền tên loại bài viết"
                value={data?.type}
                onChangeText={(text) => {
                  setData({
                    ...data,
                    type: text,
                  });
                }}
              /> */}
            </Stack>
            {/* <Button
                  ml="auto"
                  background="white"
                  leftIcon={<AntDesign name="right" size={20} color="black" />}
                /> */}
          </HStack>
          {/* form */}
          <Flex>
            <FormSection data={data} setData={setData} />
          </Flex>
        </Stack>
      </Stack>
      <HStack
        position="absolute"
        bottom={0}
        right={0}
        p={3}
        alignItems="center"
        borderTopWidth="1px"
        borderTopColor="gray.400"
        w="full"
        space={4}
      >
        <MaterialIcons
          onPress={pickImage}
          name="drive-folder-upload"
          size={24}
          color="black"
        />
        <Text>{renderNameFile()}</Text>
      </HStack>

      {/* bottom sheet */}
      {/* <BottomSheetForChooseTopics
        topicIndex={topicIndex}
        setTopicIndex={setTopicIndex}
        tab_topic={tab_topic}
        bottomSheetModalChooseTopicRef={bottomSheetModalChooseTopicRef}
      /> */}
    </SafeAreaView>
  );
};
