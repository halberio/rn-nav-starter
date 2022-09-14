import {View} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

interface Props {
  name: string;
}

const Test: NavigationFunctionComponent<Props> = ({}) => {
  return <View />;
};

// Static options are also supported!
Test.options = {
  bottomTabs: {
    visible: false,
  },
};
export default Test;
