import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export type IPlayVideoIconSVGProps = {
  size?: number;
  color?: string;
};

const PlayVideoIconSVGMemo: React.FC<IPlayVideoIconSVGProps> = ({
  size = 30,
  color = '#f6f6f6',
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <Path
        d="M27.685 11.42 8.855 1.499a5.994 5.994 0 0 0-5.936.172A5.993 5.993 0 0 0 0 6.842v16.831a5.993 5.993 0 0 0 2.92 5.172c.965.582 2.04.875 3.117.875.962 0 1.927-.234 2.818-.703l18.83-9.923A4.326 4.326 0 0 0 30 15.257a4.327 4.327 0 0 0-2.315-3.836Zm-1.614 4.61L7.24 25.952c-.818.431-1.741.404-2.532-.073a2.524 2.524 0 0 1-1.245-2.206V6.842c0-.925.453-1.729 1.245-2.206a2.559 2.559 0 0 1 1.327-.378c.408 0 .818.101 1.204.305l18.83 9.922c.421.222.467.614.467.772 0 .159-.046.551-.466.773Z"
        fill={color}
      />
    </Svg>
  );
};

const PlayVideoIconSVG = React.memo(PlayVideoIconSVGMemo);
export {PlayVideoIconSVG};
