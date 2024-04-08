import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Box, ScrollView, Stack, View } from 'native-base';
import { useCallback, useRef, useState } from 'react';
import { BottomSheetForFilter } from './BottomSheetForFilter';
import { Filters } from './Filters';
import { Post } from './Post';
import { SlideBanner } from './SlideBanner';

export const StudyTab = () => {
  const [filterState, setFilterState] = useState<number>(0);
  const [filterScope, setFilterScope] = useState<number>(0);
  const bottomSheetModalFilterRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalFilterRef.current?.present();
  }, []);

  return (
    <Box w="full" h="100%">
      <Stack minH="100%" space={6} background="white" p={4}>
        <Filters
          filterState={filterState}
          handlePresentModalPress={handlePresentModalPress}
          filterScope={filterScope}
          setFilterScope={setFilterScope}
        />
        <View>
          <SlideBanner />
        </View>
        <ScrollView flex={1}>
          <Stack space={6}>
            {Array.from({ length: 6 }).map((_, idx) => (
              <Post key={idx} />
            ))}
          </Stack>
        </ScrollView>
      </Stack>
      <BottomSheetForFilter
        filterState={filterState}
        setFilterState={setFilterState}
        bottomSheetModalFilterRef={bottomSheetModalFilterRef}
      />
    </Box>
  );
};
