import * as React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {SvgProps, Path} from 'react-native-svg';

const styles = StyleSheet.create({
  camera: {
    opacity: 0.9,
  },
});
export interface ICameraIconProps extends SvgProps {
  color?: string;
  size?: number;
}

const CameraIconSVG: React.FC<ICameraIconProps> = ({color, size}) => {
  return (
    <Svg
      shouldRasterizeIOS
      renderToHardwareTextureAndroid
      style={styles.camera}
      width={size ? size : 22}
      height={size ? size : 17}
      viewBox="0 0 22 17"
      fill="none">
      <Path
        d="M11 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke={color ? color : '#F6F6F6'}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M17.095 4.05c-.403 0-.768-.195-.94-.5-.31-.552-.705-1.257-.939-1.641-.345-.571-.904-.904-1.678-.908H8.462c-.774.004-1.332.337-1.678.908-.233.384-.627 1.09-.938 1.641-.171.305-.538.5-.94.5C2.748 4.05 1 5.52 1 7.33v5.39C1 14.53 2.748 16 4.906 16h12.19C19.251 16 21 14.53 21 12.72V7.33c0-1.811-1.748-3.28-3.905-3.28Z"
        stroke={color ? color : '#F6F6F6'}
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {CameraIconSVG};
