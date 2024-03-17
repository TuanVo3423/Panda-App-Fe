import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type TabProps = {
    title: string;
    activeTab: string;
    setActiveTab: (tab: string) => void;
  };
  
  const Tab: React.FC<TabProps> = ({ title, activeTab, setActiveTab }) => (
    <TouchableOpacity onPress={() => setActiveTab(title)}>
      <Text className={`m-3 ${activeTab === title ? 'font-semibold text-black' : 'text-gray-500'}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );

export default Tab