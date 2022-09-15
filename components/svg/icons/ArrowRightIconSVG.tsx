import * as React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path, SvgProps} from 'react-native-svg';

const styles = StyleSheet.create({
  scaleX: {
    transform: [
      {
        scaleX: 0.8,
      },
    ],
  },
});
export interface IArrowRightIconProps extends SvgProps {
  size?: number;
  color?: string;
}

const ArrowRightIconSVG: React.FC<IArrowRightIconProps> = ({
  size,
  color = '#F6F6F6',
}) => {
  return (
    <Svg
      style={styles.scaleX}
      width={size ? size : 10}
      height={size ? size : 10}
      viewBox="0 0 7 10"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.265.21a1.086 1.086 0 011.282 0l5.01 3.948c.59.465.59 1.219 0 1.684L1.548 9.79a1.086 1.086 0 01-1.282 0c-.353-.28-.353-.731 0-1.01L5.062 5 .265 1.22C-.088.94-.088.487.265.21z"
        fill={color}
      />
    </Svg>
  );
};

export {ArrowRightIconSVG};
