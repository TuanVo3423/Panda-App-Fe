import { EvilIcons } from '@expo/vector-icons';
import { Button, FormControl, HStack, Input, Stack, Text } from 'native-base';
import React from 'react';

type Props = {};

export const FormSection = (props: Props) => {
  return (
    <Stack position="relative" space={4}>
      {/* first time banner */}
      <Stack space={2} rounded="sm" py={3} px={4} background="gray.200">
        <HStack justifyContent="space-between" alignItems="center">
          <Text fontSize="16px" fontWeight="bold">
            First time writing a post?
          </Text>
          <Button
            p={0}
            background="gray.200"
            leftIcon={<EvilIcons name="close" size={30} color="black" />}
          />
        </HStack>
        <Stack space={2} w="90%">
          <Text fontSize="13px">
            Feel free to post things on this community! However, a post
          </Text>
          <Text fontWeight="semibold" underline>
            More details
          </Text>
        </Stack>
      </Stack>
      {/* form input title */}
      <FormControl isInvalid w="75%" maxW="300px">
        <Input
          px={0}
          fontSize="16px"
          fontWeight="semibold"
          style={{ color: 'orange' }}
          placeholderTextColor="blue"
          variant="unstyled"
          placeholder="Please enter the title."
        />
        <Input
          px={0}
          fontSize="14px"
          style={{ color: 'orange' }}
          variant="unstyled"
          placeholder="Noew share your story:)"
        />
      </FormControl>
    </Stack>
  );
};
