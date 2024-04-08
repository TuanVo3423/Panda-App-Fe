import { EvilIcons } from '@expo/vector-icons';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { Button, HStack, Heading, Radio, Stack, Text } from 'native-base';
import React, { Dispatch, RefObject, useCallback } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TopicFilters } from './data';

type Props = {
  bottomSheetModalChooseTopicRef: RefObject<BottomSheetModalMethods>;
  tab_topic: number;
  setTopicIndex: Dispatch<React.SetStateAction<number>>;
  topicIndex: number;
};

export const BottomSheetForChooseTopics = ({
  setTopicIndex,
  tab_topic,
  bottomSheetModalChooseTopicRef,
  topicIndex,
}: Props) => {
  // variables
  const snapPoints = React.useMemo(() => ['25%', '40%'], []);

  // callbacks
  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalChooseTopicRef.current?.close();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );
  return (
    <GestureHandlerRootView>
      {/* sheet for create post */}
      <BottomSheetModal
        ref={bottomSheetModalChooseTopicRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView>
          <Stack px={4}>
            <Button
              onPress={() => handleCloseModalPress()}
              w="50px"
              ml="auto"
              background="white"
              leftIcon={<EvilIcons name="close" size={30} color="black" />}
            />
            <Stack space={6}>
              <Heading>Topic</Heading>
              <Radio.Group
                onChange={(nextValue) => {
                  handleCloseModalPress();
                  setTopicIndex(Number(nextValue));
                }}
                // defaultValue={'0'}
                value={topicIndex.toString()}
                // value={filterState.toString()}
                name="exampleGroup"
                accessibilityLabel="pick a choice"
              >
                <Stack space={4}>
                  {TopicFilters[tab_topic].topic.map((item, index) => {
                    return (
                      <HStack
                        key={index}
                        w="full"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Stack>
                          <Text
                            fontSize="16px"
                            color="gray.600"
                            fontWeight={600}
                          >
                            {item}
                          </Text>
                        </Stack>
                        <Radio
                          colorScheme="orange"
                          aria-label={index.toString()}
                          value={index.toString()}
                        >
                          {' '}
                        </Radio>
                      </HStack>
                    );
                  })}
                </Stack>
              </Radio.Group>
            </Stack>
          </Stack>
        </BottomSheetView>
      </BottomSheetModal>
    </GestureHandlerRootView>
  );
};
