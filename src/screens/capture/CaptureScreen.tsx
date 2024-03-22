import { Feedback } from '@components/Home/Feedback';
import { Box, HStack, Stack, Text, View } from 'native-base';
import React, { useState } from 'react';
import Slick from 'react-native-slick';

type Props = {};

export const CaptureScreen = (props: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <View>
      <View className="border-[0.5px] h-[200px] border-gray-400 rounded-xl">
        <Slick
          showsPagination={false}
          loop={true}
          autoplay={true}
          onIndexChanged={(index) => setActiveSlide(index)}
        >
          <View className="m-4">
            <Feedback
              avaUri="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/431057758_326997760381002_7735400212537932300_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHV0PUxY33fe28oGXNFmIIT4Nxqwoxlt9rg3GrCjGW32iYrwlRlzQFOgIP5y9N8-Jm1K0JBCJCgaRW6laRAo6za&_nc_ohc=0uSx7-CAU7kAX--S6CT&_nc_ht=scontent.fdad3-1.fna&oh=03_AdQQVT3ebRdiKfGZNQyt8gTuPr0L56_PbB-tuWzMt6iL8w&oe=661B98B6"
              name="Phuc 20cm"
              grade="12"
              time="3 thang"
              title="HongPhuc dep trai nhat VKU"
              content="yamete yamete yamete"
              tag1="Dep trai"
              tag2="Soai ca"
              tag3="Chim dai"
            />
          </View>
          <View className="m-4">
            <Feedback
              avaUri="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/431057758_326997760381002_7735400212537932300_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHV0PUxY33fe28oGXNFmIIT4Nxqwoxlt9rg3GrCjGW32iYrwlRlzQFOgIP5y9N8-Jm1K0JBCJCgaRW6laRAo6za&_nc_ohc=0uSx7-CAU7kAX--S6CT&_nc_ht=scontent.fdad3-1.fna&oh=03_AdQQVT3ebRdiKfGZNQyt8gTuPr0L56_PbB-tuWzMt6iL8w&oe=661B98B6"
              name="Phuc 20cm"
              grade="12"
              time="3 thang"
              title="HongPhuc dep trai nhat VKU"
              content="yamete yamete yamete"
              tag1="Dep trai"
              tag2="Soai ca"
              tag3="Chim dai"
            />
          </View>
          <View className="m-4">
            <Feedback
              avaUri="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/431057758_326997760381002_7735400212537932300_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHV0PUxY33fe28oGXNFmIIT4Nxqwoxlt9rg3GrCjGW32iYrwlRlzQFOgIP5y9N8-Jm1K0JBCJCgaRW6laRAo6za&_nc_ohc=0uSx7-CAU7kAX--S6CT&_nc_ht=scontent.fdad3-1.fna&oh=03_AdQQVT3ebRdiKfGZNQyt8gTuPr0L56_PbB-tuWzMt6iL8w&oe=661B98B6"
              name="Phuc 20cm"
              grade="12"
              time="3 thang"
              title="HongPhuc dep trai nhat VKU"
              content="yamete yamete yamete"
              tag1="Dep trai"
              tag2="Soai ca"
              tag3="Chim dai"
            />
          </View>
        </Slick>
      </View>
    </View>
  );
};
