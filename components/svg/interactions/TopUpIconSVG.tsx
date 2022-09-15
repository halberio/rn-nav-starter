import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {palette} from '../../../theme/theme';

export type ITopUpIconSVGProps = {
  color: string;
  size: number;
  isActive?: boolean;
};

const TopUpIconSVGMemo: React.FC<ITopUpIconSVGProps> = ({
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
      viewBox="0 0 23 37">
      <Path
        d="M.655 14.094 11.099 0l10.818 13.862c2.404 3.08-1.646 7.02-4.658 4.53a.149.149 0 0 0-.243.114v10.238a5.803 5.803 0 1 1-11.606 0V18.407c0-.084-.1-.13-.163-.074-2.834 2.475-6.832-1.216-4.592-4.239Z"
        x={0}
        y={1}
        fill={palette.interactionsIconsShadow}
      />
      <Path
        d="M.655 14.094 11.099 0l10.818 13.862c2.404 3.08-1.646 7.02-4.658 4.53a.149.149 0 0 0-.243.114v10.238a5.803 5.803 0 1 1-11.606 0V18.407c0-.084-.1-.13-.163-.074-2.834 2.475-6.832-1.216-4.592-4.239Z"
        fill={color}
      />
    </Svg>
  );
};
const TopUpIconSVG = React.memo(TopUpIconSVGMemo);
export {TopUpIconSVG};
