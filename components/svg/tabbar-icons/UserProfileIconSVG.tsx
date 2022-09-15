import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export type IUserProfileIconSVGProps = {
  size?: number;
  color?: string;
  isActive?: boolean;
};

const UserProfileIconSVG: React.FC<IUserProfileIconSVGProps> = ({
  size,
  color = '#D8D8D8',
  isActive,
}) => {
  return (
    <Svg
      shouldRasterizeIOS
      renderToHardwareTextureAndroid
      width={size}
      height={size}
      viewBox="0 0 17 24"
      fill="none">
      {isActive ? (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 16.38c-4.363 0-7.674 3.146-7.674 6.76H0c0-5.139 4.602-9.09 10-9.09S20 18 20 23.14h-2.326c0-3.614-3.31-6.76-7.674-6.76ZM10 12.893c3.606 0 6.529-2.886 6.529-6.447C16.529 2.886 13.606 0 10 0S3.471 2.886 3.471 6.446c0 3.56 2.923 6.447 6.529 6.447Z"
          fill={color}
        />
      ) : (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 16.38c-4.363 0-7.674 3.146-7.674 6.76H0c0-5.139 4.602-9.09 10-9.09S20 18 20 23.14h-2.326c0-3.614-3.31-6.76-7.674-6.76ZM10 10.826c2.295 0 4.38-2.114 4.38-4.38 0-2.265-2.085-4.297-4.38-4.297S5.702 4.18 5.702 6.446c0 2.266 2.003 4.38 4.298 4.38Zm0 2.067c3.606 0 6.529-2.886 6.529-6.447C16.529 2.886 13.606 0 10 0S3.471 2.886 3.471 6.446c0 3.56 2.923 6.447 6.529 6.447Z"
          fill={color}
        />
      )}
    </Svg>
  );
};

export {UserProfileIconSVG};
