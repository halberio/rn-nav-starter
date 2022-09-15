import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export type IUserIconSVGProps = {
  color?: string;
  size?: number;
};

const UserIconSVG: React.FC<IUserIconSVGProps> = ({
  color = '#F6F6F6',
  size = 17,
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.487 13.974c-3.703 0-6.513 2.663-6.513 5.723H0C0 15.346 3.906 12 8.487 12c4.58 0 8.487 3.346 8.487 7.697H15c0-3.06-2.81-5.723-6.513-5.723ZM8.487 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 2a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
        fill={color}
      />
    </Svg>
  );
};

export {UserIconSVG};
