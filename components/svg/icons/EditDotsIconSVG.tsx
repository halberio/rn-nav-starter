import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

export type IEditDotsIconSVGProps = {
  color?: string;
  size?: number;
};

const EditDotsIconSVG: React.FC<IEditDotsIconSVGProps> = ({
  size = 24,
  color = '#F6F6F6',
}) => {
  return (
    <Svg
      width={size ? size : 24}
      height={size ? size : 4}
      viewBox="0 0 24 4"
      fill="none">
      <Circle cx={22} cy={2} r={2} fill={color} />
      <Circle cx={12.4} cy={2} r={2} fill={color} />
      <Circle cx={2} cy={2} r={2} fill={color} />
    </Svg>
  );
};

export {EditDotsIconSVG};
