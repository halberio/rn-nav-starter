import React, {PropsWithChildren} from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {Navigation} from 'react-native-navigation';
import {withNavigationProvider} from 'react-native-navigation-hooks';
import {Provider, useSelector} from 'react-redux';
import {HomeFeedScreen} from './tabs-navigator/screens/HomeFeedScreen';
import useIsDarkMode from '../hooks/useIsDarkMode';
import {darkTheme, palette, theme} from '../theme/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DiscoverScreen} from './tabs-navigator/screens/DiscoverScreen';
import {ApolloClient, ApolloProvider, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {API_URL} from '../config/config';
import {RootState} from '../redux/store';
import {cache} from '../apollo-cache/cache';
import {UserProfileScreen} from './app-stack-navigator/screens/user-profile/UserProfileScreen';

const WithThemeScreen: React.FC<PropsWithChildren> = ({children}) => {
  const isDarkMode = useIsDarkMode();
  const navigationDarkTheme: any = React.useMemo(() => {
    return {
      ...darkTheme,
      colors: {
        ...darkTheme.colors,
        background: palette.primaryBlack,
        text: palette.primaryWhite,
      },
    };
  }, []);

  const restyleTheme = React.useMemo(
    () => (isDarkMode ? navigationDarkTheme : theme),
    [isDarkMode, navigationDarkTheme],
  );
  return <ThemeProvider theme={restyleTheme}>{children}</ThemeProvider>;
};

const httpLink = createHttpLink({
  uri: API_URL,
});

const WithApolloProvider: React.FC<PropsWithChildren> = ({children}) => {
  const {token} = useSelector((state: RootState) => state.authReducer);

  const authLink = React.useMemo(
    () =>
      setContext((_, {headers}) => {
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token} ` : '',
          },
        };
      }),
    [token],
  );
  const client = React.useMemo(
    () =>
      new ApolloClient({
        link: authLink.concat(httpLink),
        cache: cache,
      }),
    [authLink],
  );
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const WrapScreen: any = (ReduxScreen: any, storeLocal: any) => {
  return (props: any) => {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <GestureHandlerRootView style={{flex: 1}}>
        <Provider store={storeLocal}>
          <WithApolloProvider>
            <WithThemeScreen>
              <ReduxScreen {...props} />
            </WithThemeScreen>
          </WithApolloProvider>
        </Provider>
      </GestureHandlerRootView>
    );
  };
};
export const registerScreens = (reduxstore: any) => {
  //=========================Home Feed======================//
  Navigation.registerComponent(
    'HomeFeed',
    () => withNavigationProvider(WrapScreen(HomeFeedScreen, reduxstore)),
    () => HomeFeedScreen,
  );

  //=========================Discover======================//
  Navigation.registerComponent(
    'Discover',
    () => withNavigationProvider(WrapScreen(DiscoverScreen, reduxstore)),
    () => DiscoverScreen,
  );

  //=========================User Profile Screen======================//
  Navigation.registerComponent(
    'UserProfile',
    () => withNavigationProvider(WrapScreen(UserProfileScreen, reduxstore)),
    () => UserProfileScreen,
  );
};
