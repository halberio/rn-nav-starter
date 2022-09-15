import * as React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const styles = StyleSheet.create({
  icon: {
    opacity: 0.95,
  },
});
export type IHomeIconSVGProps = {
  color?: string;
  size?: number;
  isActive?: boolean;
};

const HomeIconSVGMemo: React.FC<IHomeIconSVGProps> = ({
  color,
  size,
  isActive,
}) => {
  return (
    <Svg
      shouldRasterizeIOS
      renderToHardwareTextureAndroid
      width={size ? size : 20}
      height={size ? size : 19}
      viewBox="0 0 20 19"
      style={styles.icon}
      fill="none">
      <Path
        d="M1.11 9.1a2 2 0 0 1 .762-1.778l7.514-5.844a1 1 0 0 1 1.228 0l7.514 5.844a2 2 0 0 1 .762 1.777l-.71 7.1A2 2 0 0 1 16.19 18H15a2 2 0 0 1-2-2v0a3 3 0 0 0-6 0v0a2 2 0 0 1-2 2H3.81a2 2 0 0 1-1.99-1.801l-.71-7.1Z"
        fill={isActive && color ? color : 'none'}
        stroke={color ? color : '#F6F6F6'}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HomeIconSVG = React.memo(HomeIconSVGMemo);
export {HomeIconSVG};
