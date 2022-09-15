import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {palette} from '../../../theme/theme';

export type IDownVoteSVGProps = {
  color: string;
  size: number;
};

const DownVoteSVGMemo: React.FC<IDownVoteSVGProps> = ({
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
        d="m.655 20.453 10.444 14.094 10.818-13.863c2.404-3.08-1.646-7.018-4.658-4.529a.149.149 0 0 1-.243-.114V5.803a5.803 5.803 0 1 0-11.606 0V16.14c0 .084-.1.13-.163.074-2.834-2.475-6.832 1.216-4.592 4.239Z"
        x={0}
        y={1}
        fill={palette.interactionsIconsShadow}
      />
      <Path
        d="m.655 20.453 10.444 14.094 10.818-13.863c2.404-3.08-1.646-7.018-4.658-4.529a.149.149 0 0 1-.243-.114V5.803a5.803 5.803 0 1 0-11.606 0V16.14c0 .084-.1.13-.163.074-2.834-2.475-6.832 1.216-4.592 4.239Z"
        fill={color}
      />
    </Svg>
  );
};

const DownVoteSVG = React.memo(DownVoteSVGMemo);
export {DownVoteSVG};
