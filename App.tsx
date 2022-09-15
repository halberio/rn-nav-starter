import * as React from 'react';
import {Button, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {Header} from 'react-native/Libraries/NewAppScreen';

interface Props {
  propTest: string;
}

const App: NavigationFunctionComponent<Props> = ({componentId}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Button
        title="Push Settings Screen"
        color="#710ce3"
        onPress={() =>
          Navigation.push(componentId, {
            component: {
              name: 'Test2',
            },
          })
        }
      />
      <View />
    </ScrollView>
  );
};
App.options = {
  topBar: {
    visible: false,
  },
};
// Static options are also supported!

export default App;
