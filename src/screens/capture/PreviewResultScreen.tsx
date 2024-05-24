import { Post } from '@components/community';
import { AppStackScreenProps } from '@navigation/data';
import {
  Box,
  Heading,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
  View,
} from 'native-base';
import React from 'react';

type Props = {};
const fake = {
  input: 'Giải phương trình bậc nhất 2x + 3 = 7.',
  steps: [
    'Bước 1: Chuyển số hạng tự do sang vế phải của phương trình: 2x = 7 - 3.',
    'Bước 2: Thực hiện phép trừ ở vế phải: 2x = 4.',
    'Bước 3: Chia cả hai vế của phương trình cho hệ số của x là 2: x = 4 / 2.',
    'Bước 4: Kết quả là x = 2.',
  ],
};
const posts = [
  {
    id: '55538aac-4609-4498-8848-aa9dc313a019',
    image_buffering: null,
    title: 'Số giá trị của hàm số 7(x) = x^2−4x+1 ứng với x và Ax là',
    content: 'Số giá trị của hàm số 7(x) = x^2−4x+1 ứng với x và Ax là',
    questionContent: 'Số giá trị của hàm số 7(x) = x^2−4x+1 ứng với x và Ax là',
    type: 'toán lớp 12',
    upvote: 0,
    group_id: null,
    user_id: 'b6917a22-481f-4900-a94b-ec6a11cd17c3',
    Comment: [],
    User: {
      id: 'b6917a22-481f-4900-a94b-ec6a11cd17c3',
      name: 'Hoc sinh 2',
      avatar: null,
      email: 'student2@gmail.com',
      password: '$2b$10$bodHOO5MKVq.376KkATjpeqoeLAXnmmT0OLiaJgeiq2SWDQ1sa.r6',
      createdAt: '2024-05-20T15:42:02.803Z',
      updatedAt: '2024-05-20T15:42:02.803Z',
      role: 'student',
      group_id: null,
      Rating_float: null,
      Point_int: null,
      Class_int: null,
    },
  },
];
export const PreviewResultScreen = ({
  navigation,
  route,
}: AppStackScreenProps<'PreviewCaptureResult'>) => {
  const { data, input, steps, image_url } = route.params;

  const render = () => {
    if (data.length === 0) {
      return (
        <Text fontSize="14px" color="gray.600">
          There are no articles related to your issue
        </Text>
      );
    } else {
      return data.map((post: any) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            content={post.content}
            questionContent={post.questionContent}
            title={post.title}
            upvote={post.upvote}
            type={post.type}
            group_id={post.group_id}
            navigation={navigation}
            image_buffering={post.image_buffering}
            user_id={post.user_id}
            Comment={post.Comment}
            User={post.User}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
          />
        );
      });
    }
  };
  return (
    <ScrollView background="white" flex={1} paddingX={4}>
      <Stack w="full" space={4}>
        <Image
          w="full"
          height="100px"
          resizeMode="contain"
          alt="problem_img"
          source={{ uri: image_url }}
        />
        <Box w="full" h="2px" background="gray.200" />
        <Heading>Solution steps</Heading>
        <Stack space={2}>
          {steps.map((step, idx) => (
            <Text
              fontSize="16px"
              color="gray.700"
              fontWeight="semibold"
              key={idx}
            >
              {/* {Object.keys(step)[0]}: {Object.values(step)[0]} */}
              {step}
            </Text>
          ))}
        </Stack>
        <Box w="full" h="2px" background="gray.200" />
      </Stack>
      <VStack space={3} mt={4}>
        <Heading>Related posts</Heading>
        {render()}
      </VStack>
    </ScrollView>
  );
};
