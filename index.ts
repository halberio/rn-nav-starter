/**
 * @format
 */
import 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './navigation/registerScreens';
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

  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: false,
          },
        },
        children: [
          {
            //@ts-ignore
            bottomTabs: {
              children: [
                {
                  component: {
                    name: 'HomeFeed',

                    options: {
                      bottomTab: {
                        text: 'Feed',
                      },
                    },
                  },
                },
                {
                  component: {
                    name: 'Discover',

                    options: {
                      bottomTab: {
                        text: 'Discover',
                      },
                    },
                  },
                },
                // {
                //   component: {
                //     name: 'HomeFeed',
                //     options: {
                //       bottomTab: {
                //         text: 'Tab 2',
                //       },
                //     },
                //   },
                // },
              ],
            },
          },
        ],
      },
    },
  });
});
