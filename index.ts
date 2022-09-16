/**
 * @format
 */
import 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './navigation/registerScreens';
import {tabsNavigator} from './navigation/tabs-navigator/tabsNavigator';
import store from './redux/store';
Navigation.events().registerAppLaunchedListener(async () => {
  registerScreens(store);
  Navigation.setDefaultOptions({
    layout: {
      componentBackgroundColor: 'white',
      backgroundColor: '#FFFFFF',
      orientation: ['portrait'],
      adjustResize: true,
      fitSystemWindows: true,
    },
  });

  Navigation.setRoot(tabsNavigator);
});
