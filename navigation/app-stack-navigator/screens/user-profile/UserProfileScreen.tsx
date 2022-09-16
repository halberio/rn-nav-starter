import React from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import Box from '../../../../theme/Box';
import FastImage from 'react-native-fast-image';
import {SIZES} from '../../../../theme/sizes';
export type IUserProfileScreenProps = {
  thumbnail_url: string;
};

const UserProfileScreen: NavigationFunctionComponent<
  IUserProfileScreenProps
> = ({thumbnail_url}) => {
  return (
    <Box flex={1}>
      <FastImage
        resizeMode={FastImage.resizeMode.cover}
        nativeID={`image${thumbnail_url}Dest`}
        style={{
          width: SIZES.screenWidth,
          height: SIZES.screenWidth / 1.2,
        }}
        source={{
          uri: thumbnail_url,
        }}
      />
    </Box>
  );
};

UserProfileScreen.options = {
  bottomTabs: {
    visible: true,
    animate: true,
    hideShadow: true,
    barStyle: 'black',
    drawBehind: false,
    tabsAttachMode: 'afterInitialTab',
  },
  navigationBar: {
    visible: false,
  },
};
export {UserProfileScreen};
