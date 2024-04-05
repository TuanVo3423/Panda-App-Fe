import { Center, Text } from 'native-base';
import React from 'react';

type Props = {};

export const PostTab = (props: Props) => {
  return (
    <Center mt="50%">
      <Text fontSize={16} fontWeight="bold">
        No post yet!
      </Text>
    </Center>
  );
};
