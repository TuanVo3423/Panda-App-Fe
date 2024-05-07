import { BottomSheetForChooseTopics, FormSection } from '@components/community';
import { TopicFilters } from '@components/community/data';
import { API_CONTRACT } from '@constants/index';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { AppStackScreenProps } from '@navigation/data';
import { createPosts } from '@services/api/posts/request';
import { IPostRequest } from '@services/api/posts/types';
import { fetcher } from '@services/fetcher';
import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  useToast,
} from 'native-base';
import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
export const FormPostScreen = ({
  route,
  navigation,
}: AppStackScreenProps<'FormPost'>) => {
  const [data, setData] = useState<IPostRequest>({
    title: '',
    content: '',
    questionContent: '',
    type: ['Daily conversation'],
  });
  const isDisabled =
    data.title === '' || data.content === '' || data.questionContent === '';
  const bottomSheetModalChooseTopicRef = useRef<BottomSheetModal>(null);
  const [topicIndex, setTopicIndex] = useState<number>(-1);
  const handlePresentModalChooseTopicPress = useCallback(() => {
    bottomSheetModalChooseTopicRef.current?.present();
  }, []);
  const queryClient = useQueryClient();

  const { mutateAsync: handleUploadPost, isSuccess } = useMutation(
    async () => {
      const res = await createPosts(data);
      return res;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['getPosts'], (oldData: any) => {
          // console.log('oldData', oldData);
          return [...oldData, data];
        });
        console.log(data);
        toast.show({
          render: () => {
            return (
              <Box bg="#62929E" px="2" py="1" rounded="sm" color="white" mb={5}>
                Create Post Success!
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
  const toast = useToast();
  const { tab_topic } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack>
        {/* header */}
        <HStack
          paddingTop="20px"
          paddingRight="10px"
          paddingBottom={0}
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
          <Heading size="md">{TopicFilters[tab_topic].title}</Heading>
          <Button
            disabled={isDisabled}
            onPress={async () => {
              await handleUploadPost();
            }}
            variant="ghost"
          >
            <Text>Upload</Text>
          </Button>
        </HStack>
        {/* select bottom sheet */}
        <Stack px={4} space={4}>
          {topicIndex !== -1 ? (
            <TouchableOpacity
              onPress={() => {
                handlePresentModalChooseTopicPress();
              }}
            >
              <HStack
                py={2}
                borderBottomWidth="1px"
                borderTopWidth="1px"
                borderColor="gray.200"
                alignItems="center"
              >
                <Stack space={2} background="white">
                  <Text fontSize="16px" fontWeight="semibold">
                    {TopicFilters[tab_topic].topic[topicIndex]}
                  </Text>
                </Stack>
                <Button
                  ml="auto"
                  background="white"
                  leftIcon={<AntDesign name="right" size={20} color="black" />}
                />
              </HStack>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                handlePresentModalChooseTopicPress();
              }}
            >
              <HStack
                py={2}
                borderBottomWidth="1px"
                borderTopWidth="1px"
                borderColor="gray.200"
                alignItems="center"
              >
                <Stack space={2} background="white">
                  <Text fontSize="16px" fontWeight="semibold">
                    Please select a topic.
                  </Text>
                </Stack>
                <Button
                  ml="auto"
                  background="white"
                  leftIcon={<AntDesign name="right" size={20} color="black" />}
                />
              </HStack>
            </TouchableOpacity>
          )}
          {/* form */}
          <FormSection data={data} setData={setData} />
        </Stack>
      </Stack>

      {/* bottom sheet */}
      <BottomSheetForChooseTopics
        topicIndex={topicIndex}
        setTopicIndex={setTopicIndex}
        tab_topic={tab_topic}
        bottomSheetModalChooseTopicRef={bottomSheetModalChooseTopicRef}
      />
    </SafeAreaView>
  );
};
