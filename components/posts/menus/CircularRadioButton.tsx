import * as React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated';
import Box, {AnimatedBox} from '../../../theme/Box';
import TextRestyle from '../../../theme/TextRestyle';

const SIZE = 26;
const SPRING_CONF = {
  overshootClamping: true,
  damping: 80,
};
export type ICircularRadioButtonProps = {
  text: string;
  onPress: () => void;
  isSelected: boolean;
};

const CircularRadioButtonMemo: React.FC<ICircularRadioButtonProps> = ({
  text,
  isSelected,
  onPress,
}) => {
  const isActive = useDerivedValue(() => {
    return isSelected ? withSpring(1, SPRING_CONF) : withSpring(0, SPRING_CONF);
  });

  const animatedWhiteCircleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: isActive.value,
        },
      ],
    };
  });
  const animatedBlackCircleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      isActive.value,
      [0, 1],
      [0.25, 1],
      Extrapolate.CLAMP,
    );
    return {
      opacity,
    };
  });
  return (
    <TouchableOpacity delayPressIn={20} onPress={onPress}>
      <Box
        paddingVertical={'sm'}
        justifyContent="space-between"
        flexDirection="row"
        alignItems={'center'}>
        {text ? (
          <TextRestyle
            lineHeight={28}
            fontWeight="600"
            opacity={0.8}
            fontSize={16}
            variant={'paragraph'}>
            {text}
          </TextRestyle>
        ) : null}

        <AnimatedBox
          backgroundColor={'black'}
          width={SIZE}
          height={SIZE}
          style={[
            {borderRadius: Math.round(SIZE / 2)},
            animatedBlackCircleStyle,
          ]}>
          <AnimatedBox
            backgroundColor={'white'}
            left={SIZE / 4}
            top={SIZE / 4}
            width={SIZE / 2}
            height={SIZE / 2}
            style={[
              {borderRadius: Math.round(SIZE / 4)},
              animatedWhiteCircleStyle,
            ]}
          />
        </AnimatedBox>
      </Box>
    </TouchableOpacity>
  );
};

const CircularRadioButton = React.memo(CircularRadioButtonMemo);
export {CircularRadioButton};
