import { Comment } from '@components/community/Comment';
import { AppStackScreenProps } from '@navigation/data';
import { useGetComments } from '@services/api/comments/queries';
import { createComment } from '@services/api/comments/request';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Input,
  ScrollView,
  Text,
  View,
  useToast,
} from 'native-base';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { handleUploadImage } from '@utils/cloudinary';

type Props = {};

export const PreviewCommentScreen = ({
  route,
}: AppStackScreenProps<'PreviewComment'>) => {
  const { UserProfile } = useAuthenticatedStore();
  const [loading, setLoading] = useState<boolean>(false);
  const { post_id } = route.params;
  const { data, isLoading } = useGetComments(post_id);
  const [commentInput, setCommentInput] = useState<string>('');
  const toast = useToast();
  const queryClient = useQueryClient();

  const [ImagePickerObject, setImagePickerObject] =
    useState<ImagePicker.ImagePickerResult>();
  const [image, setImage] = useState<string>('');

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
      const data = await handleUploadImage(
        ImagePickerObject as ImagePicker.ImagePickerSuccessResult
      );
      setImage(data.url);
    } catch (err) {
      // console.log('err: ', err);
    }
  };

  const { mutateAsync: handleCreateComment, isLoading: createCommentLoading } =
    useMutation(
      'createComment',
      async () => {
        const data = await createComment(
          { content: commentInput, image: image },
          post_id,
          UserProfile.token as string
        );
        return data;
      },
      {
        onSuccess: (data) => {
          setCommentInput('');
          queryClient.prefetchQuery('getPosts');
          queryClient.setQueryData(['getComments', post_id], (oldData: any) => {
            // // console.log('oldData', oldData);
            return [
              ...oldData,
              {
                User: {
                  name: UserProfile.user?.name,
                },
                ...data,
              },
            ];
          });
          setLoading(false);
          toast.show({
            render: () => {
              return (
                <Box
                  bg="#62929E"
                  px="2"
                  py="1"
                  rounded="sm"
                  color="white"
                  mb={5}
                >
                  Comment Success!
                </Box>
              );
            },
          });
        },
        onError: (error) => {
          // console.log('error: ', error);
        },
      }
    );

  const renderComment = () => {
    if (isLoading)
      return (
        <Center flex={1}>
          <ActivityIndicator size="large" />
        </Center>
      );
    if (data.length === 0)
      return (
        <Center flex={1}>
          <Text>No Comment Yet!</Text>
        </Center>
      );
    if (data.length > 0) {
      return (
        <View p={4}>
          {data.map((item: any, index: number) => (
            <Comment
              key={index}
              image={item.image}
              content={item.content}
              User={item.User}
            />
          ))}
        </View>
      );
    }
  };

  return (
    <Flex flexDir="column" w="full" h="full">
      <ScrollView w="full" h="85%">
        {renderComment()}
      </ScrollView>
      <HStack alignItems="center" px={4} space={2} mb={1} flex={1}>
        <Input
          flex={1}
          value={commentInput}
          onChangeText={(text) => setCommentInput(text)}
          size="md"
          placeholder="Nhập bình luận của bạn..."
        />
        {image ? (
          <MaterialCommunityIcons
            onPress={() => setImage('')}
            name="file-undo"
            size={24}
            color="black"
          />
        ) : (
          <MaterialIcons
            onPress={pickImage}
            name="drive-folder-upload"
            size={24}
            color="black"
          />
        )}

        <Button
          minW="80px"
          isLoading={loading}
          onPress={async () => {
            await handleUploadToCloudinary();
            await handleCreateComment();
          }}
        >
          <Text>Bình luận</Text>
        </Button>
      </HStack>
    </Flex>
  );
};
