import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export type IArrowLeftSVGProps = {
  size?: number;
  color?: string;
};

const ArrowLeftSVG: React.FC<IArrowLeftSVGProps> = ({
  size,
  color = '#F6F6F6',
}) => {
  return (
    <Svg
      width={size ? size * 0.5 : 10}
      height={size ? size : 20}
      viewBox={'0 0 10 20'}
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.621 9.506l7.44-7.439a.5.5 0 000-.707L9.354.653a.5.5 0 00-.708 0l-8.5 8.5a.5.5 0 000 .707l8.5 8.5a.5.5 0 00.708 0l.707-.707a.5.5 0 000-.707l-7.44-7.44z"
        fill={color}
      />
    </Svg>
  );
};

export {ArrowLeftSVG};
