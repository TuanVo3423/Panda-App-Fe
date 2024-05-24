import { View } from 'react-native';
import { useState } from 'react';
import { Box, Button, Input, Link, Text, useToast } from 'native-base';
import React from 'react';
import { useMutation } from 'react-query';
import { Login } from '@services/api/auth/request';
import useAuthenticatedStore from '@stores/useAuthenticatedStore';

export const LoginForm = ({ navigation, setIsLogin }: any) => {
  const toast = useToast();
  const { setUserProfile } = useAuthenticatedStore();
  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: '',
  });
  const isDisabled = dataLogin.email === '' || dataLogin.password === '';
  const {
    mutateAsync: handleLogin,
    isLoading,
    isError,
  } = useMutation(
    async () => {
      const res = await Login({
        email: dataLogin.email,
        password: dataLogin.password,
      });
      console.log(res);
      return res;
    },
    {
      onSuccess: (data) => {
        toast.show({
          render: () => {
            return (
              <Box bg="#62929E" px="2" py="1" rounded="sm" color="white" mb={5}>
                <Text color="white">Login success!</Text>
              </Box>
            );
          },
        });
        setUserProfile(data);
        navigation.navigate('Root');
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
      <Input
        onChangeText={(text) => setDataLogin({ ...dataLogin, email: text })}
        value={dataLogin.email}
        size="md"
        placeholder="Enter your email..."
      />
      <View></View>
      <Input
        onChangeText={(text) => setDataLogin({ ...dataLogin, password: text })}
        value={dataLogin.password}
        size="md"
        placeholder="Enter your password..."
      />
      <View></View>
      <Link onPress={() => setIsLogin(false)} ml="auto">
        No account?
      </Link>
      <Button
        isDisabled={isDisabled}
        background="#62929E"
        isLoading={isLoading}
        onPress={async () => {
          await handleLogin();
        }}
      >
        <Text className="text-md text-white font-bold">Login</Text>
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
