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

type CommentProps = {
  image: string;
  content: string;
  User: UserResponse;
};

export const Comment = ({ content, User, image }: CommentProps) => {
  const [visible, setIsVisible] = useState(false);
  return (
    <Stack w="full" space={4}>
      {/* header */}
      <HStack justifyContent="space-between">
        <HStack space={2} alignItems="center">
          <Avatar size="xs" />
          <Text>{User && User.name}</Text>
        </HStack>
        <Text>3 ngày trước</Text>
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
