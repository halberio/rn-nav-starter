import * as React from 'react';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

export default function useIsDarkMode(): boolean {
  const isDarkMode = useColorScheme() === 'dark';
  const {colorMode} = useSelector(
    (state: RootState) => state.userInterfaceReducer,
  );

  const finalDark =
    colorMode === 'auto' ? isDarkMode : colorMode === 'dark' ? true : false;

  const defferedDarkMode = React.useDeferredValue(finalDark);
  const memoDarkMode = React.useMemo(
    () => defferedDarkMode,
    [defferedDarkMode],
  );
  return memoDarkMode;
}
