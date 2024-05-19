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

type Props = {};

export const PreviewCommentScreen = ({
  route,
}: AppStackScreenProps<'PreviewComment'>) => {
  const { UserProfile } = useAuthenticatedStore();
  const { post_id } = route.params;
  console.log(post_id);
  const { data, isLoading } = useGetComments(post_id);
  // console.log('data of posts: ', data);
  const [commentInput, setCommentInput] = useState<string>('');
  const toast = useToast();
  const queryClient = useQueryClient();
  const { mutateAsync: handleCreateComment, isLoading: createCommentLoading } =
    useMutation(
      'createComment',
      async () => {
        const data = await createComment(
          { content: commentInput },
          post_id,
          UserProfile.token as string
        );
        return data;
      },
      {
        onSuccess: (data) => {
          setCommentInput('');
          queryClient.setQueryData(['getComments', post_id], (oldData: any) => {
            // console.log('oldData', oldData);
            return [...oldData, data];
          });
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
          console.log('error: ', error);
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
            <Comment key={index} content={item.content} />
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
      <HStack px={4} space={2} mb={1} flex={1}>
        <Input
          value={commentInput}
          onChangeText={(text) => setCommentInput(text)}
          w="70%"
          size="md"
          placeholder="Nhập bình luận của bạn..."
        />
        <Button
          isLoading={createCommentLoading}
          onPress={async () => await handleCreateComment()}
          flex={1}
        >
          <Text>Bình luận</Text>
        </Button>
      </HStack>
    </Flex>
  );
};
