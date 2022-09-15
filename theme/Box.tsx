import {createBox} from '@shopify/restyle';
import Animated from 'react-native-reanimated';
import {Theme} from './theme';

const Box = createBox<Theme>();

export const AnimatedBox = Animated.createAnimatedComponent(Box);

export default Box;
