import * as React from 'react';
import {Button, ScrollView, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {Header} from 'react-native/Libraries/NewAppScreen';

interface Props {
  propTest: string;
}

const App: NavigationFunctionComponent<Props> = ({componentId}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Header />

      <Button
        title="Push Settings Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              name: 'Test',
            },
          })
        }
      />
      <View />
    </ScrollView>
  );
};

// Static options are also supported!

export default App;
