import { AntDesign } from '@expo/vector-icons';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { RootTabScreenProps } from '@navigation/data';
import { Button, HStack, Stack, Text } from 'native-base';
import React, { RefObject, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CreatePostMapping } from './data';

type Props = {
  navigation: RootTabScreenProps<'Community'>['navigation'];
  bottomSheetModalCreatePostRef: RefObject<BottomSheetModalMethods>;
};

export const BottomSheetForCreatePost = ({
  bottomSheetModalCreatePostRef,
  navigation,
}: Props) => {
  // variables
  const snapPoints = React.useMemo(() => ['25%', '35%'], []);

  // callbacks

  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
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
        ref={bottomSheetModalCreatePostRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView>
          <Stack space={5} p={4}>
            {CreatePostMapping.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    bottomSheetModalCreatePostRef.current?.close();
                    navigation.navigate('FormPost', { tab_topic: index });
                  }}
                >
                  <HStack>
                    <Stack space={2} background="white">
                      <Text fontSize="16px" fontWeight="bold">
                        {item.title}
                      </Text>
                      <Text>{item.description}</Text>
                    </Stack>
                    <Button
                      ml="auto"
                      background="white"
                      leftIcon={
                        <AntDesign name="right" size={24} color="black" />
                      }
                    />
                  </HStack>
                </TouchableOpacity>
              );
            })}
          </Stack>
        </BottomSheetView>
      </BottomSheetModal>
    </GestureHandlerRootView>
  );
};
