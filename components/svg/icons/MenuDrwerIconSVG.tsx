import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

export type IMenuDrwerIconSVGProps = {
  size?: number;
  color?: string;
};

const MenuDrwerIconSVG: React.FC<IMenuDrwerIconSVGProps> = ({size, color}) => {
  return (
    <Svg
      width={size ? size : 24}
      height={size ? size : 24}
      viewBox="0 0 29 17"
      fill="none">
      <Rect
        x={13.439}
        width={15.561}
        height={2.829}
        rx={1.415}
        fill={color ? color : '#F6F6F6'}
      />
      <Rect
        x={7}
        width={3.5}
        height={3.5}
        rx={1.5}
        fill={color ? color : '#F6F6F6'}
      />
      <Rect
        x={6.366}
        y={7.073}
        width={22.634}
        height={2.829}
        rx={1.415}
        fill={color ? color : '#F6F6F6'}
      />
      <Rect
        y={14.032}
        width={29}
        height={2.829}
        rx={1.415}
        fill={color ? color : '#F6F6F6'}
      />
    </Svg>
  );
};

export {MenuDrwerIconSVG};
