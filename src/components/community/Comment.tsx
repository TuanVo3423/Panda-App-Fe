import {
  Stack,
  HStack,
  Avatar,
  Text,
  Heading,
  Tag,
  Box,
  Flex,
  Image,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { UserResponse } from '@services/api/auth/types';
import ImageView from 'react-native-image-viewing';
import { Touchable, TouchableOpacity } from 'react-native';
import { formatDistanceToNow, parseISO } from 'date-fns';

type CommentProps = {
  image: string;
  content: string;
  User: UserResponse;
  createdAt: string;
  updatedAt: string;
};

export const Comment = ({
  content,
  User,
  image,
  createdAt,
  updatedAt,
}: CommentProps) => {
  const [visible, setIsVisible] = useState(false);
  const date = parseISO(createdAt);
  const timeAgo = formatDistanceToNow(date, { addSuffix: true });
  return (
    <Stack w="full" space={4}>
      {/* header */}
      <HStack justifyContent="space-between">
        <HStack space={2} alignItems="center">
          <Avatar size="xs" />
          <Text>{User && User.name}</Text>
        </HStack>
        <Text>{timeAgo}</Text>
      </HStack>
      <Heading size="lg">{content}</Heading>
      <TouchableOpacity onPress={() => setIsVisible(true)}>
        <Flex w="full">
          {image && (
            <Image
              alt="img"
              w="full"
              height="150px"
              resizeMode="cover"
              source={{
                uri: image,
              }}
            />
          )}
        </Flex>
      </TouchableOpacity>
      <HStack space={3} alignItems="center" ml="auto">
        <HStack alignItems="center" space={2}>
          <AntDesign
            style={{ color: 'gray' }}
            name={'hearto'}
            color={'black'}
            size={24}
          />
          <Text>{0}</Text>
        </HStack>
        <HStack alignItems="center" space={2}>
          <FontAwesome
            style={{ color: 'gray' }}
            name="commenting-o"
            size={24}
            color="black"
          />
          <Text>{0}</Text>
        </HStack>
      </HStack>
      {/* underline */}
      <Box w="full" h="2px" background="gray.200" />
      <ImageView
        images={[
          {
            uri: image,
          },
        ]}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </Stack>
  );
};
