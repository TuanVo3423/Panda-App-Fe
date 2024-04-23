import { Box, HStack, Stack, Tag, Text, View } from 'native-base';
import React, { useState } from 'react';
import Slick from 'react-native-slick';
type Props = {};

export const SlideBanner = (props: Props) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const numberOfSlides = 3;
  return (
    <View className="h-[80px] bg-[#f1f1f1]  rounded-xl">
      <Slick
        showsPagination={false}
        loop={true}
        autoplay={true}
        onIndexChanged={(index) => setActiveSlide(index)}
      >
        {Array.from({ length: numberOfSlides }).map((_, index) => (
          <Stack key={index} space={2} className="m-4">
            <HStack space={2} alignItems="center">
              <Box rounded="lg" background="gray.700" px={1}>
                <Text color="white" fontSize="12px" fontWeight="bold">
                  Notice
                </Text>
              </Box>
              <Text
                fontWeight="bold"
                fontSize="14px"
                isTruncated
                maxW="70%"
                w="70%"
              >
                NativeBase gives you a contrasting color based on your theme.
                You can also customise it using the useAccessibleColors hook.
              </Text>
              <Text fontWeight="bold">
                {activeSlide + 1}
                <Text fontWeight="normal">/{numberOfSlides}</Text>
              </Text>
            </HStack>
            <Text>Each tab holds different topics galore!</Text>
          </Stack>
        ))}
      </Slick>
    </View>
  );
};
