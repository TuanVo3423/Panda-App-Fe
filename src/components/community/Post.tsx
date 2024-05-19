import {
  Avatar,
  Box,
  HStack,
  Heading,
  Stack,
  Text,
  useToast,
} from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { IPostResponse, IUpdatePostRequest } from '@services/api/posts/types';
import { useMutation } from 'react-query';
import { updatePosts } from '@services/api/posts/request';
import { useAuth } from '@hooks/useAuth';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
import { AppStackScreenProps, RootTabScreenProps } from '@navigation/data';
import { ActivityIndicator } from 'react-native';
interface IPostRequest {
  data: IUpdatePostRequest;
  post_id: string;
  token: string;
}
export const Post = ({
  id,
  content,
  questionContent,
  title,
  upvote,
  type,
  navigation,
  image_buffering,
}: IPostResponse & { navigation: any }) => {
  const { UserProfile } = useAuthenticatedStore();
  const [isUpvoted, setIsUpvoted] = React.useState<boolean>(false);
  const [upvoteNumber, setUpvoteNumber] = React.useState<number>(upvote);
  const toast = useToast();
  const {
    mutateAsync: handleUpVote,
    isSuccess,
    isLoading: isUpVoteLoading,
  } = useMutation(
    async (data: IPostRequest) => {
      const res = await updatePosts(data.data, data.post_id, data.token);
      return res;
    },
    {
      onSuccess: (data) => {
        console.log(data);

        toast.show({
          render: () => {
            return (
              <Box bg="#62929E" px="2" py="1" rounded="sm" color="white" mb={5}>
                Like Post Success!
              </Box>
            );
          },
        });
      },
      onError(error: any) {
        console.log(error);
      },
    }
  );
  const { mutateAsync: handleUndoUpVote, isLoading: isUndoVoteLoading } =
    useMutation(
      async (data: IPostRequest) => {
        const res = await updatePosts(data.data, data.post_id, data.token);
        return res;
      },
      {
        onSuccess: (data) => {
          console.log(data);

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
                  Unlike Post Success!
                </Box>
              );
            },
          });
        },
        onError(error: any) {
          console.log(error);
        },
      }
    );

  return (
    <Stack space={4}>
      {/* header */}
      <HStack justifyContent="space-between">
        <HStack space={2} alignItems="center">
          <Avatar
            source={{ uri: image_buffering ? image_buffering : 'abc' }}
            size="xs"
          />
          <Text>Tuan Vo</Text>
        </HStack>
        <Text>3 day(s) ago</Text>
      </HStack>
      <Heading size="lg">{title}</Heading>
      <Text color="gray.500">{questionContent}</Text>
      {/* footer */}
      <HStack justifyContent="space-between">
        <Tag content={'Daily conversation'} />
        {/* <Text></Text> */}
        <HStack space={4}>
          <HStack alignItems="center" space={2}>
            {!isUpVoteLoading && !isUndoVoteLoading ? (
              <AntDesign
                onPress={async () => {
                  if (isUpvoted) {
                    if (upvoteNumber === 0) return;
                    await handleUndoUpVote({
                      data: { upvote: upvoteNumber - 1 },
                      post_id: id,
                      token: UserProfile.token as string,
                    });
                    setIsUpvoted(false);
                    setUpvoteNumber(upvoteNumber - 1);
                  } else {
                    await handleUpVote({
                      data: { upvote: upvoteNumber + 1 },
                      post_id: id,
                      token: UserProfile.token as string,
                    });
                    setIsUpvoted(true);
                    setUpvoteNumber(upvoteNumber + 1);
                  }
                }}
                style={{ color: 'gray' }}
                name={isUpvoted ? 'heart' : 'hearto'}
                color={isUpvoted ? 'red' : 'black'}
                size={24}
              />
            ) : (
              <ActivityIndicator size="small" />
            )}

            <Text>{upvoteNumber}</Text>
          </HStack>
          {/* underline */}
          <HStack alignItems="center" space={2}>
            <FontAwesome
              onPress={() =>
                navigation.navigate('PreviewComment', { post_id: id })
              }
              style={{ color: 'gray' }}
              name="commenting-o"
              size={24}
              color="black"
            />
            <Text>0</Text>
          </HStack>
        </HStack>
      </HStack>
      {/* underline */}
      <Box w="full" h="2px" background="gray.200" />
    </Stack>
  );
};

const Tag = ({ content }: { content: string }) => {
  return (
    <Box bg="gray.200" px={2} py={1} borderRadius="9999px">
      <Text color="black" fontSize={12} fontWeight="bold">
        {content}
      </Text>
    </Box>
  );
};
