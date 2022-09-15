import React from 'react';
import {Button} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import Box from '../../../theme/Box';

export type IDiscoverScreenProps = {};

const DiscoverScreen: NavigationFunctionComponent<IDiscoverScreenProps> = ({
  componentId,
}) => {
  return (
    <Box>
      <Box
        backgroundColor={'screenBackground'}
        position={'absolute'}
        top={300}
        left={'30%'}>
        <Button
          title="go to Profile"
          onPress={() =>
            Navigation.push(componentId, {
              component: {
                name: 'UserProfile',
              },
            })
          }
        />
      </Box>
    </Box>
  );
};

export {DiscoverScreen};
