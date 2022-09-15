import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export type IAppleIconSVGProps = {
  size?: number;
};

const AppleIconSVG: React.FC<IAppleIconSVGProps> = ({size}) => {
  return (
    <Svg
      width={size ? size : 24}
      viewBox="0 0 22 26"
      height={size ? size : 24}
      fill="none">
      <Path
        d="M17.489 23.993c-1.35 1.316-2.84 1.111-4.261.49-1.51-.632-2.89-.672-4.486 0-1.986.861-3.04.611-4.236-.49C-2.247 17.013-1.25 6.38 6.425 5.98c1.861.1 3.165 1.033 4.261 1.11 1.63-.332 3.19-1.286 4.934-1.16 2.096.17 3.663 1 4.71 2.494-4.311 2.602-3.29 8.306.67 9.907-.792 2.09-1.81 4.154-3.514 5.68l.003-.018zM10.537 5.904C10.335 2.802 12.839.25 15.72 0c.396 3.578-3.24 6.255-5.183 5.904z"
        fill="#fff"
      />
    </Svg>
  );
};

export {AppleIconSVG};
