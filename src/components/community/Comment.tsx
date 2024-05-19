import { Stack, HStack, Avatar, Text, Heading, Tag, Box } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

type CommentProps = {
  content: string;
};

export const Comment = ({ content }: CommentProps) => {
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
      <Heading size="lg">{content}</Heading>

      {/* underline */}
      <Box w="full" h="2px" background="gray.200" />
    </Stack>
  );
};
