import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

export type INotificationIconProps = {
  size?: number;
  color?: string;
  isActive?: boolean;
};

const NotificationsIconSVGMemo: React.FC<INotificationIconProps> = ({
  size,
  color = '#F6F6F6',
  isActive,
}) => {
  return (
    <Svg
      shouldRasterizeIOS
      renderToHardwareTextureAndroid
      width={size ? size : 20}
      height={size ? size : 32}
      viewBox="0 0 20 27"
      fill={isActive ? color : 'none'}>
      <Path
        clipRule="evenodd"
        d="M1.5 17.787v-.219a3.6 3.6 0 0 1 .602-1.818 4.87 4.87 0 0 0 1.194-2.314c0-.666 0-1.342.058-2.009C3.654 8.218 6.827 6 9.96 6h.078c3.133 0 6.306 2.218 6.617 5.427.058.667 0 1.343.048 2.009a4.955 4.955 0 0 0 1.193 2.323c.365.538.573 1.164.602 1.81v.209c.022.87-.278 1.719-.844 2.39a4.505 4.505 0 0 1-2.853 1.37c-3.195.343-6.419.343-9.614 0a4.554 4.554 0 0 1-2.853-1.37 3.604 3.604 0 0 1-.834-2.38Z"
        stroke={color}
        strokeWidth={2.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.555 24.852a3.088 3.088 0 0 0 4.288.505 2.89 2.89 0 0 0 .524-.505"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={10} cy={3.75} r={2.5} strokeWidth={1.75} stroke={color} />
    </Svg>
  );
};

const NotificationsIconSVG = React.memo(NotificationsIconSVGMemo);

export {NotificationsIconSVG};
