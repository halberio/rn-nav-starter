import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export interface ITwitterIconProps extends SvgProps {
  size?: number;
  color?: string;
}

const TwitterIconSVG: React.FC<ITwitterIconProps> = ({
  size,
  color = '#F6F6F6',
}) => {
  return (
    <Svg
      width={size ? size : 28}
      viewBox="0 0 28 24"
      height={size ? size : 24}
      fill="none">
      <Path
        d="M.143 20.702a16.086 16.086 0 008.712 2.554c10.554 0 16.516-8.914 16.157-16.909a11.535 11.535 0 002.837-2.943c-1.02.453-2.116.759-3.265.895a5.691 5.691 0 002.498-3.144 11.403 11.403 0 01-3.608 1.38A5.678 5.678 0 0019.324.74c-3.668 0-6.365 3.423-5.537 6.98A16.134 16.134 0 012.072 1.78 5.691 5.691 0 003.83 9.37a5.667 5.667 0 01-2.576-.712c-.061 2.634 1.826 5.096 4.56 5.646a5.69 5.69 0 01-2.567.097 5.687 5.687 0 005.31 3.947 11.42 11.42 0 01-8.415 2.354z"
        fill={color}
      />
    </Svg>
  );
};

export {TwitterIconSVG};
