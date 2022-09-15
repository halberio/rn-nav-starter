import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export interface IPasswordEyeIconProps extends SvgProps {
  size?: number;
  disabled?: boolean;
  color?: string;
}

const PasswordEyeIconSVG: React.FC<IPasswordEyeIconProps> = ({
  size,
  disabled,
  color = '#F6F6F6',
}) => {
  return (
    <Svg
      height={size ? size : 20}
      viewBox={'0 0 20 17'}
      width={size ? size : 17}
      fill="none">
      <Path
        clipRule="evenodd"
        d="M13.161 8.053a3.162 3.162 0 1 1-6.323-.001 3.162 3.162 0 0 1 6.323.001Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M9.998 15.355c3.808 0 7.291-2.738 9.252-7.302C17.289 3.489 13.806.75 9.998.75h.004C6.194.75 2.711 3.489.75 8.053c1.961 4.564 5.444 7.302 9.252 7.302h-.004Z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {disabled && (
        <Path
          x={-1.25}
          y={-1.25}
          stroke={color}
          strokeWidth={0.25}
          d="M3.147.855L5.49 3.197l.757.757 1.686 1.685.71.712 5.984 5.984.713.712 1.363 1.364.783.784 2.636 2.636a.5.5 0 10.708-.708l-2.341-2.344-.758-.757-2.396-2.395-5.983-5.985L3.856.147a.5.5 0 00-.709 0 .499.499 0 000 .708z"
          fill={color}
        />
      )}
    </Svg>
  );
};

export {PasswordEyeIconSVG};
