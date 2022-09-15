import * as React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {SvgProps, Path, Defs} from 'react-native-svg';

const styles = StyleSheet.create({
  svgShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1.5,
      height: 1,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
  },
});
export interface ICloseIconProps extends SvgProps {
  size?: number;
  color?: string;
  withShadow?: boolean;
}

const CloseIconMemo: React.FC<ICloseIconProps> = ({
  size,
  color = '#F6F6F6',
  withShadow,
}) => {
  return (
    <Svg
      style={withShadow ? styles.svgShadow : {}}
      width={size ? size : 25}
      height={size ? size : 25}
      viewBox={'0 0 25 25'}
      fill="none">
      <Path
        d="M18.793 4.293a1 1 0 111.414 1.414l-6.543 6.543 6.543 6.543a1 1 0 01-1.414 1.414l-6.543-6.543-6.543 6.543a1 1 0 01-1.414-1.414l6.543-6.543-6.543-6.543a1 1 0 011.414-1.414l6.543 6.543 6.543-6.543z"
        fill={color}
      />
      <Defs />
    </Svg>
  );
};

const CloseIcon = React.memo(CloseIconMemo);
export {CloseIcon};
