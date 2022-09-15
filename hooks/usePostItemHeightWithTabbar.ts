import * as React from 'react';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {Platform, StatusBar} from 'react-native';
import {SIZES} from '../theme/sizes';

type Props = {
  transparent?: boolean;
};
function usePostItemHeightWithTabbar({transparent = true}: Props) {
  const tabBarHeight = useBottomTabBarHeight();

  const itemHeight = React.useMemo(() => {
    if (Platform.OS === 'android') {
      return (
        SIZES.screenHeight -
        tabBarHeight -
        (transparent === false ? StatusBar.currentHeight || 24 : 0)
      );
    } else {
      return SIZES.screenHeight - tabBarHeight;
    }
  }, [tabBarHeight, transparent]);

  return {itemHeight, tabBarHeight};
}

export {usePostItemHeightWithTabbar};
