import { BottomSheetForChooseTopics, FormSection } from '@components/community';
import { TopicFilters } from '@components/community/data';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { AppStackScreenProps } from '@navigation/data';
import { Button, HStack, Heading, Stack, Text } from 'native-base';
import React, { useCallback, useRef, useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
export const FormPostScreen = ({
  route,
  navigation,
}: AppStackScreenProps<'FormPost'>) => {
  const bottomSheetModalChooseTopicRef = useRef<BottomSheetModal>(null);
  const [topicIndex, setTopicIndex] = useState<number>(-1);
  const handlePresentModalChooseTopicPress = useCallback(() => {
    bottomSheetModalChooseTopicRef.current?.present();
  }, []);
  const { tab_topic } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Stack>
        {/* header */}
        <HStack
          p="10px 10px 0px 5px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            onPress={() => navigation.goBack()}
            background="white"
            p={0}
            leftIcon={<EvilIcons name="close" size={28} color="black" />}
          />
          <Heading size="md">{TopicFilters[tab_topic].title}</Heading>
          <Button variant="ghost">
            <Text>Upload</Text>
          </Button>
        </HStack>
        {/* select bottom sheet */}
        <Stack px={4} space={4}>
          {topicIndex !== -1 ? (
            <TouchableOpacity
              onPress={() => {
                handlePresentModalChooseTopicPress();
              }}
            >
              <HStack
                py={2}
                borderBottomWidth="1px"
                borderTopWidth="1px"
                borderColor="gray.200"
                alignItems="center"
              >
                <Stack space={2} background="white">
                  <Text fontSize="16px" fontWeight="semibold">
                    {TopicFilters[tab_topic].topic[topicIndex]}
                  </Text>
                </Stack>
                <Button
                  ml="auto"
                  background="white"
                  leftIcon={<AntDesign name="right" size={20} color="black" />}
                />
              </HStack>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                handlePresentModalChooseTopicPress();
              }}
            >
              <HStack
                py={2}
                borderBottomWidth="1px"
                borderTopWidth="1px"
                borderColor="gray.200"
                alignItems="center"
              >
                <Stack space={2} background="white">
                  <Text fontSize="16px" fontWeight="semibold">
                    Please select a topic.
                  </Text>
                </Stack>
                <Button
                  ml="auto"
                  background="white"
                  leftIcon={<AntDesign name="right" size={20} color="black" />}
                />
              </HStack>
            </TouchableOpacity>
          )}
          {/* form */}
          <FormSection />
        </Stack>
      </Stack>

      {/* bottom sheet */}
      <BottomSheetForChooseTopics
        topicIndex={topicIndex}
        setTopicIndex={setTopicIndex}
        tab_topic={tab_topic}
        bottomSheetModalChooseTopicRef={bottomSheetModalChooseTopicRef}
      />
    </SafeAreaView>
  );
};
