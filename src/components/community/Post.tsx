import { Avatar, Box, HStack, Heading, Stack, Text } from 'native-base';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

type Props = {};

export const Post = (props: Props) => {
  return (
    <Stack space={4}>
      {/* header */}
      <HStack justifyContent="space-between">
        <HStack space={2} alignItems="center">
          <Avatar size="xs" />
          <Text>Tuan Vo</Text>
        </HStack>
        <Text>3 day(s) ago</Text>
      </HStack>
      <Heading size="lg">Hi friends</Heading>
      <Text color="gray.500">
        I'm looking for a new friend to play game with me. I'm a good player and
        I can teach you how to play game well. Please contact me if you are
        interested in.
      </Text>
      {/* footer */}
      <HStack justifyContent="space-between">
        <Tag content={'Daily conversation'} />
        {/* <Text></Text> */}
        <HStack space={4}>
          <HStack alignItems="center" space={2}>
            <AntDesign
              style={{ color: 'gray' }}
              name="hearto"
              size={24}
              color="black"
            />
            <Text>1</Text>
          </HStack>
          {/* underline */}
          <HStack alignItems="center" space={2}>
            <FontAwesome
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
