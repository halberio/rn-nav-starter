import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {palette} from '../../../theme/theme';

export type IShareIconProps = {
  color: string;
  size: number;
};

const ShareIconSVGMemo: React.FC<IShareIconProps> = ({
  color = '#FCFCFC',
  size = 35,
}) => {
  return (
    <Svg
      shouldRasterizeIOS
      renderToHardwareTextureAndroid
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 28 24">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.442 6.431C6.699 7.503 1.263 14.833.058 21.336l-.034.193c-.24 1.388 1.406 2.032 2.514 1.121 3.503-2.88 6.347-4.084 9.252-4.487.872-.12 1.75-.17 2.652-.17v4.608c0 1.144 1.428 1.717 2.264.908L27.449 13.1c.51-.493.519-1.29.021-1.795L16.727.4c-.826-.838-2.285-.272-2.285.887v5.144Z"
        x={0}
        y={1}
        fill={palette.interactionsIconsShadow}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.442 6.431C6.699 7.503 1.263 14.833.058 21.336l-.034.193c-.24 1.388 1.406 2.032 2.514 1.121 3.503-2.88 6.347-4.084 9.252-4.487.872-.12 1.75-.17 2.652-.17v4.608c0 1.144 1.428 1.717 2.264.908L27.449 13.1c.51-.493.519-1.29.021-1.795L16.727.4c-.826-.838-2.285-.272-2.285.887v5.144Z"
        fill={color}
      />
    </Svg>
  );
};

const ShareIconSVG = React.memo(ShareIconSVGMemo);
export {ShareIconSVG};
