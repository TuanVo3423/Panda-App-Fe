import { View } from 'react-native';
import { useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Input,
  Link,
  Radio,
  Text,
  useToast,
} from 'native-base';
import React from 'react';
import { useMutation } from 'react-query';
import { Login, Register } from '@services/api/auth/request';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export type RegisterForm = {
  name: string;
  email: string;
  password: string;
  role: 'tutor' | 'student';
};

export const RegisterForm = ({ navigation, setIsLogin }: any) => {
  const toast = useToast();
  const { setUserProfile } = useAuthenticatedStore();
  const [dataRegister, setDataRegister] = useState<RegisterForm>({
    name: '',
    email: '',
    password: '',
    role: 'tutor',
  });
  const isDisabled =
    dataRegister.email === '' ||
    dataRegister.password === '' ||
    dataRegister.name === '';
  const {
    mutateAsync: handleRegister,
    isLoading,
    isError,
  } = useMutation(
    async () => {
      const res = await Register({
        email: dataRegister.email,
        password: dataRegister.password,
        name: dataRegister.name,
        role: dataRegister.role,
      });
      console.log(res);
      return res;
    },
    {
      onSuccess: (data) => {
        setIsLogin(true);
        toast.show({
          render: () => {
            return (
              <Box bg="#62929E" px="2" py="1" rounded="sm" color="white" mb={5}>
                <Text color="white">Register success!</Text>
              </Box>
            );
          },
        });
      },
      onError(error: any) {
        toast.show({
          render: () => {
            return (
              <Box bg="#ff0000" px="2" py="1" rounded="sm" color="white" mb={5}>
                <Text color="white"> {error.message}</Text>
              </Box>
            );
          },
        });
        // console.log(error);
      },
    }
  );
  return (
    <View className="flex-col space-y-2 mx-5">
      <HStack mb={4} space={4} alignItems="center">
        <Ionicons
          onPress={() => setIsLogin(true)}
          name="arrow-back"
          size={24}
          color="black"
        />
        {/* <Text>Back to Login</Text> */}
      </HStack>

      <Input
        onChangeText={(text) =>
          setDataRegister({ ...dataRegister, name: text })
        }
        value={dataRegister.name}
        size="md"
        placeholder="Enter your name..."
      />
      <View></View>
      <Input
        onChangeText={(text) =>
          setDataRegister({ ...dataRegister, email: text })
        }
        value={dataRegister.email}
        size="md"
        placeholder="Enter your email..."
      />
      <View></View>
      <Input
        onChangeText={(text) =>
          setDataRegister({ ...dataRegister, password: text })
        }
        value={dataRegister.password}
        size="md"
        placeholder="Enter your password..."
      />
      <View></View>
      <Radio.Group
        name="myRadioGroup"
        accessibilityLabel="favorite number"
        value={dataRegister.role}
        onChange={(text: any) => {
          setDataRegister({ ...dataRegister, role: text });
        }}
      >
        <Radio value="tutor" my={1}>
          Tutor
        </Radio>
        <Radio value="student" my={1}>
          Student
        </Radio>
      </Radio.Group>
      <Link onPress={() => setIsLogin(false)} ml="auto"></Link>
      <Button
        isDisabled={isDisabled}
        background="#62929E"
        isLoading={isLoading}
        onPress={async () => {
          await handleRegister();
        }}
      >
        <Text className="text-md text-white font-bold">Register</Text>
      </Button>
      {/* <LoginButton
      IconUri="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png"
      descript="Tiếp tục với Zalo"
      bgColor="#048fe4"
      txtColor="white"
    />
    <LoginButton
      IconUri="https://icons.veryicon.com/png/o/business/enterprise-common-fill-icon/mail-fill-1.png"
      descript="Tiếp tục với Email"
      bgColor="#e8e8e8"
      txtColor="black"
    /> */}
    </View>
  );
};
