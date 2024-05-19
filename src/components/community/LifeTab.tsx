import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { Box, Center, ScrollView, Stack, View } from 'native-base';
import { useCallback, useRef, useState } from 'react';
import { BottomSheetForFilter } from './BottomSheetForFilter';
import { Filters } from './Filters';
import { Post } from './Post';
import { SlideBanner } from './SlideBanner';
import React from 'react';
import { useQuery } from 'react-query';
import { useGetPosts } from '@services/api/posts/queries';
import { ActivityIndicator } from 'react-native';
// const useGetPosts = (options?: any) =>
//   useQuery(
//     'getPosts',
//     async () => {
//       // const data = await getPosts();
//       return 1;
//     },
//     { ...options }
//   );
export const LifeTab = ({ navigation }: any) => {
  const [filterState, setFilterState] = useState<number>(0);
  const [filterScope, setFilterScope] = useState<number>(0);
  const bottomSheetModalFilterRef = useRef<BottomSheetModal>(null);
  const { data, isLoading, refetch } = useGetPosts();

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
        {isLoading ? (
          <Center flex={1}>
            <ActivityIndicator size="large" />
          </Center>
        ) : (
          <ScrollView flex={1}>
            <Stack space={6}>
              {data?.map((post) => (
                <Post
                  navigation={navigation}
                  key={post.id}
                  id={post.id}
                  content={post.content}
                  questionContent={post.questionContent}
                  title={post.title}
                  upvote={post.upvote}
                  type={post.type}
                  group_id={post.group_id}
                  image_buffering={post.image_buffering}
                />
              ))}
            </Stack>
          </ScrollView>
        )}
      </Stack>
      <BottomSheetForFilter
        filterState={filterState}
        setFilterState={setFilterState}
        bottomSheetModalFilterRef={bottomSheetModalFilterRef}
      />
    </Box>
  );
};
