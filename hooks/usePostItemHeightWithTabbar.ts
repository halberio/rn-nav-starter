import * as React from 'react';
import {Dimensions, Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
const {bottomTabsHeight} = Navigation.constantsSync();

export default function usePostItemHeightWithTabbar() {
  const [itemHeight, setItemHeight] = React.useState(
    Dimensions.get('window').height - bottomTabsHeight,
  );
  React.useEffect(() => {
    Navigation.constants().then(c => {
      setItemHeight(
        Dimensions.get('window').height -
          c.bottomTabsHeight -
          (Platform.OS === 'android' ? c.statusBarHeight : 0),
      );
    });
  }, []);
  const itemHeightMemo = React.useMemo(() => itemHeight, [itemHeight]);
  return {
    itemHeight: itemHeightMemo,
  };
}
