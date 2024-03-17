import { extend } from 'dayjs';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
interface LoginButtonProps extends TouchableOpacityProps {
  IconUri: any;
  descript: string;
  bgColor: string;
  txtColor: string;
}
export const LoginButton: React.FC<LoginButtonProps> = ({
  IconUri,
  descript,
  bgColor,
  txtColor,
  ...rest
}) => {
  return (
    <TouchableOpacity
      {...rest}
      className="h-14 rounded-xl w-full flex-row items-center justify-center my-1"
      style={{ backgroundColor: bgColor }}
    >
      <Image source={{ uri: IconUri }} className="h-4 w-4 mr-2" />
      <Text className="text-lg font-semibold" style={{ color: txtColor }}>
        {descript}
      </Text>
    </TouchableOpacity>
  );
};
