import * as React from 'react';
import {FadeIn} from 'react-native-reanimated';
import useIsDarkMode from '../../../hooks/useIsDarkMode';
import {AnimatedBox} from '../../../theme/Box';
import {SIZES} from '../../../theme/sizes';
import TextRestyle from '../../../theme/TextRestyle';
import {Logo} from './Logo';

export type ILogoBrandProps = {};

const LogoBrand: React.FC<ILogoBrandProps> = ({}) => {
  const isDark = useIsDarkMode();

  const color = React.useMemo(() => {
    return isDark ? '#fff' : '#000';
  }, [isDark]);
  return (
    <AnimatedBox
      entering={FadeIn}
      flexDirection={'column'}
      padding="xl"
      justifyContent="center"
      alignItems={'center'}>
      <Logo color={color} size={SIZES.screenWidth * 0.285} />
      <TextRestyle variant={'textLogo'} accessible={false}>
        Reveal what is real
      </TextRestyle>
    </AnimatedBox>
  );
};

export {LogoBrand};
