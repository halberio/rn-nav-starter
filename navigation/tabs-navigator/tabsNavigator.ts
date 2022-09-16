import {LayoutRoot} from 'react-native-navigation';

export const tabsNavigator: LayoutRoot = {
  root: {
    bottomTabs: {
      options: {
        bottomTabs: {
          translucent: true,
        },
        topBar: {
          visible: false,
        },
      },
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
                    topBar: {
                      visible: false,
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
