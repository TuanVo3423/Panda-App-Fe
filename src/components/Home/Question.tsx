import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type QuestionProps = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

const Question: React.FC<QuestionProps> = ({ question, answers, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);

  const checkAnswer = (answer: string) => {
    if (!hasAnswered) {
      setSelectedAnswer(answer);
      setHasAnswered(true);
    }
  };

  return (
    <View className='p-5'>
      <Text className='text-lg font-semibold text-center'>{question}</Text>
      <Text className='text-xs text-center text-gray-500 mb-4'>255 nguoi tham gia</Text>
      {answers.map((answer, index) => {
        let bgColor = '';
        if (hasAnswered) {
          bgColor = selectedAnswer === answer
            ? answer === correctAnswer ? 'bg-green-500' : 'bg-red-500'
            : answer === correctAnswer ? 'bg-green-500' : '';
        }
        return (
          <TouchableOpacity
            key={index}
            className={`${bgColor} p-2 rounded-2xl mt-2 border-[1px] border-gray-200 flex items-center justify-center h-14`}
            onPress={() => checkAnswer(answer)}
            disabled={hasAnswered}
          >
            <Text className='font-semibold'>{answer}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Question;
