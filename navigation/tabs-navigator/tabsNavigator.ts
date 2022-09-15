import {LayoutRoot} from 'react-native-navigation';

export const tabsNavigator: LayoutRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
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
            ],
          },
        },
        {
          stack: {
            children: [
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
            ],
          },
        },
      ],
    },
  },
};
