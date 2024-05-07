import { Post } from '@components/community';
import { AppStackScreenProps } from '@navigation/data';
import { Text, VStack } from 'native-base';
import React from 'react';

type Props = {};

export const PreviewResultScreen = ({
  navigation,
  route,
}: AppStackScreenProps<'PreviewCaptureResult'>) => {
  const { data } = route.params;
  console.log(data);
  return (
    <VStack p={4}>
      {data.map((post: any) => {
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
            image_buffering={post.image_buffering}
          />
        );
      })}
    </VStack>
  );
};
