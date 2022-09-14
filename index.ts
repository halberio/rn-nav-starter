/**
 * @format
 */

import {View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import App from './App';
import Test from './Test';
Navigation.registerComponent('WelcomeScreen', () => App);
Navigation.registerComponent('Test', () => Test);
Navigation.registerComponent('Test2', () => View);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'WelcomeScreen',

                    options: {
                      bottomTab: {
                        text: 'Tab 1',
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            component: {
              name: 'Test2',
              options: {
                bottomTab: {
                  text: 'Tab 2',
                },
              },
            },
          },
        ],
      },
    },
  });
});
