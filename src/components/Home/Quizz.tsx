import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Question from './Question';

const Quizz = () => {
  return (
    <View className="mx-5 border-[0.3px] border-gray-400 rounded-xl mt-5">
      <View className="flex-row px-5 mt-5">
        <Text className="text-base font-bold flex-1">
          Today's English vocabulary for high school students
        </Text>
        <Feather name="chevron-right" size={25} />
      </View>
      <Question
        question="Which lecturer has the highest number of students at VKU? "
        answers={['Dinh Thi Dong Phuong', 'Dang Dai Tho', 'Huynh Cong Phap']}
        correctAnswer="Dang Dai Tho"
      />

      <TouchableOpacity className="bg-[#62929E] flex items-center justify-center rounded-b-xl h-14">
        <Text className="font-semibold text-white text-center">
          Advanced vocabulary learning
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Quizz;
