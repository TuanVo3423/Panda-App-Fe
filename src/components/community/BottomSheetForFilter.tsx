import { AntDesign } from '@expo/vector-icons';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { Button, HStack, Heading, Radio, Stack, Text } from 'native-base';
import React, { RefObject, useCallback, useMemo } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FilterMapping } from './data';

type Props = {
  bottomSheetModalFilterRef: RefObject<BottomSheetModalMethods>;
  setFilterState: (state: number) => void;
  filterState: number;
};

export const BottomSheetForFilter = ({
  bottomSheetModalFilterRef,
  setFilterState,
  filterState,
}: Props) => {
  const snapPoints = useMemo(() => ['25%', '40%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalFilterRef.current?.close();
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
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        ref={bottomSheetModalFilterRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={{ paddingHorizontal: 10 }}>
          <Button
            onPress={() => handleCloseModalPress()}
            w="50px"
            ml="auto"
            background="white"
            leftIcon={<AntDesign name="closecircleo" size={24} color="black" />}
          />
          <Stack space={6}>
            <Heading>Filter Setting</Heading>
            <Radio.Group
              onChange={(nextValue) => {
                handleCloseModalPress();
                setFilterState(Number(nextValue));
              }}
              defaultValue={'0'}
              value={filterState.toString()}
              name="exampleGroup"
              accessibilityLabel="pick a choice"
            >
              <Stack space={4}>
                {FilterMapping.map((item, index) => {
                  return (
                    <HStack
                      key={index}
                      w="full"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Stack>
                        <Text fontSize="16px" color="gray.600" fontWeight={600}>
                          {item.title}
                        </Text>
                        <Text color="gray.500">{item.description}</Text>
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
        </BottomSheetView>
      </BottomSheetModal>
    </GestureHandlerRootView>
  );
};
