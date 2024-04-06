import { Center, Text } from 'native-base';
import React from 'react';

type Props = {};

export const LikeTab = (props: Props) => {
  return (
    <Center mt="50%">
      <Text fontSize={16} fontWeight="bold">
        No like yet!
      </Text>
    </Center>
  );
};
