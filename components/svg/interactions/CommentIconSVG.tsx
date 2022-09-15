import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {palette} from '../../../theme/theme';

export type ICommentIconSVGProps = {
  size?: number;
  color?: string;
};

const CommentIconSVG: React.FC<ICommentIconSVGProps> = ({
  color = '#F6F6F6',
  size = 20,
}) => {
  return (
    <Svg
      shouldRasterizeIOS
      renderToHardwareTextureAndroid
      width={size}
      height={size}
      viewBox="0 0 20 22"
      fill="none">
      <Path
        d="M10 0C4.5 0 0 4.5 0 10c0 2.3.8 4.5 2.3 6.3l-2 2c-.4.4-.4 1 0 1.4.2.2.4.3.7.3h9c5.5 0 10-4.5 10-10S15.5 0 10 0ZM6 11c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Z"
        x={0}
        y={0.7}
        fill={palette.interactionsIconsShadow}
      />

      <Path
        d="M10 0C4.5 0 0 4.5 0 10c0 2.3.8 4.5 2.3 6.3l-2 2c-.4.4-.4 1 0 1.4.2.2.4.3.7.3h9c5.5 0 10-4.5 10-10S15.5 0 10 0ZM6 11c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm4 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Z"
        fill={color}
      />
    </Svg>
  );
};

export {CommentIconSVG};
