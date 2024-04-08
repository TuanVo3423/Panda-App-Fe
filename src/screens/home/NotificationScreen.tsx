import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Noti from '@components/Notification/Noti';
import { Checkbox } from 'react-native-paper';
import { headerStyles } from '@theme/globalStyles';

type Props = {};

export const NotificationScreen = (props: any) => {
  const { navigation } = props;
  const [checked, setChecked] = React.useState(false);
  const [showBottomView, setShowBottomView] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  useEffect(() => {
    const allNotiChecked = ['noti1', 'noti2', 'noti3'].every(
      (id) => checkboxStates[id]
    );
    if (allNotiChecked !== checkboxStates['all']) {
      setCheckboxStates((prevStates) => ({
        ...prevStates,
        all: allNotiChecked,
      }));
    }
  }, [checkboxStates]);
  const handleSelectAllCheckboxes = (selectAll: boolean) => {
    const newStates: { [key: string]: boolean } = {};
    const allCheckboxIds = ['noti1', 'noti2', 'noti3', 'all'];
    allCheckboxIds.forEach((id) => {
      newStates[id] = selectAll;
    });
    setCheckboxStates(newStates);
  };
  const handleCheckboxChange = (id: string) => {
    if (id === 'all') {
      handleSelectAllCheckboxes(!checkboxStates['all']);
    } else {
      setCheckboxStates((prevStates) => ({
        ...prevStates,
        [id]: !prevStates[id],
      }));
    }
  };
  return (
    <View className="bg-white h-full">
      <View style={headerStyles.style}>
        <Feather
          name="chevron-left"
          size={28}
          className=""
          onPress={() => navigation.goBack()}
        />
        <Text className="text-lg font-semibold">Notifications</Text>
        <Feather
          name="check-square"
          size={25}
          onPress={() => setShowCheckboxes(!showCheckboxes)}
        />
      </View>
      <Image
        source={{ uri: 'https://i.ytimg.com/vi/f53F3G_7DPA/maxresdefault.jpg' }}
        className="w-full h-[120px]"
      />
      <ScrollView className="bg-white" bounces={false}>
        {showCheckboxes ? (
          <View className="flex-row items-center ml-5">
            <Checkbox.Android
              status={checkboxStates['noti1'] ? 'checked' : 'unchecked'}
              onPress={() => handleCheckboxChange('noti1')}
              color="orange"
            />
            <View className="flex-1">
              <Noti />
            </View>
          </View>
        ) : (
          <Noti />
        )}
        {showCheckboxes ? (
          <View className="flex-row items-center ml-5">
            <Checkbox.Android
              status={checkboxStates['noti2'] ? 'checked' : 'unchecked'}
              onPress={() => handleCheckboxChange('noti2')}
              color="orange"
            />
            <View className="flex-1">
              <Noti />
            </View>
          </View>
        ) : (
          <Noti />
        )}
        {showCheckboxes ? (
          <View className="flex-row items-center ml-5">
            <Checkbox.Android
              status={checkboxStates['noti3'] ? 'checked' : 'unchecked'}
              onPress={() => handleCheckboxChange('noti3')}
              color="orange"
            />
            <View className="flex-1">
              <Noti />
            </View>
          </View>
        ) : (
          <Noti />
        )}
      </ScrollView>
      {showCheckboxes && (
        <View className='absolute bottom-0 left-0 right-0 bg-white flex-row items-center px-5 h-16 shadow-2xl shadow-slate-900/20 shadow-b-2-shadow-spread-2">'>
          <View className="flex-1">
            <Checkbox.Android
              status={checkboxStates['all'] ? 'checked' : 'unchecked'}
              onPress={() => handleSelectAllCheckboxes(!checkboxStates['all'])}
              color="orange"
            />
          </View>

          <View className="flex-row space-x-5">
            <Text className="text-base font-semibold">Xoa</Text>
            <Text className="text-base font-semibold">Doc</Text>
          </View>
        </View>
      )}
    </View>
  );
};
