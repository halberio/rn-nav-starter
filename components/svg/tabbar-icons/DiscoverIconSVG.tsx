import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export type IDiscoverIconSVGProps = {
  color?: string;
  size?: number;
  isActive?: boolean;
};

const DiscoverIconSVG: React.FC<IDiscoverIconSVGProps> = ({
  color,
  size,
  isActive,
}) => {
  return (
    <Svg
      shouldRasterizeIOS
      renderToHardwareTextureAndroid
      width={size ? size : 22}
      height={size ? size : 20}
      viewBox="0 0 22 20"
      fill="none">
      <Circle
        cx={18.217}
        cy={2.922}
        r={1.922}
        stroke={color ? color : '#F6F6F6'}
        strokeWidth={2}
        fill={isActive ? color : 'none'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.146 1.842H5.88C2.867 1.842 1 3.975 1 6.986v8.083c0 3.011 1.83 5.135 4.879 5.135h8.604c3.011 0 4.879-2.124 4.879-5.135v-7.04"
        stroke={color ? color : '#F6F6F6'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="m7.222 14.404 1.593-5.09 5.089-1.592-1.593 5.09-5.09 1.592Z"
        stroke={color ? color : '#F6F6F6'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={isActive ? color : 'none'}
      />
    </Svg>
  );
};

export {DiscoverIconSVG};
