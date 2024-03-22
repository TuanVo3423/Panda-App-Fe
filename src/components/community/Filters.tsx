import { MaterialIcons } from '@expo/vector-icons';
import { Box, Button, HStack, ScrollView, Text } from 'native-base';
import React, { Dispatch, SetStateAction } from 'react';
import { FilterMapping, FilterLabel } from './data';

type Props = {
  handlePresentModalPress: () => void;
  filterState: number;
  filterScope: number;
  setFilterScope: Dispatch<SetStateAction<number>>;
};

export const Filters = ({
  handlePresentModalPress,
  filterState,
  filterScope,
  setFilterScope,
}: Props) => {
  return (
    <HStack space={4}>
      <Button
        onPress={() => handlePresentModalPress()}
        rightIcon={
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        }
        rounded={'full'}
        backgroundColor="white"
        borderWidth="1px"
        borderColor="gray.300"
      >
        <Text>{FilterMapping[filterState].title}</Text>
      </Button>

      {/* underline */}
      <Box w="1px" h="full" background="gray.400" />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {FilterLabel.map((label, idx) => (
          <Button
            onPress={() => setFilterScope(idx)}
            key={idx}
            mr={1}
            px={5}
            rounded="full"
            variant="outline"
            backgroundColor={filterScope === idx ? 'gray.600' : 'white'}
            borderWidth="1px"
            borderColor="gray.300"
          >
            <Text color={filterScope === idx ? 'white' : 'black'}>{label}</Text>
          </Button>
        ))}
      </ScrollView>
    </HStack>
  );
};
