import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export type IMapPinIconProps = {
  color?: string;
  size?: number;
};

const MapPinIconSVGMemo: React.FC<IMapPinIconProps> = ({
  color = '#F6F6F6',
  size = 35,
  ...props
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 35 50" {...props} fill="none">
      <Path
        d="M17.373 0C8.148 0 .643 7.505.643 16.73a16.577 16.577 0 0 0 1.687 7.332l12.641 24.475a2.704 2.704 0 0 0 4.804 0L32.412 24.07a16.575 16.575 0 0 0 1.691-7.338C34.103 7.505 26.6 0 17.373 0Zm0 25.488c-4.829 0-8.757-3.929-8.757-8.757 0-4.829 3.928-8.757 8.757-8.757s8.757 3.928 8.757 8.757c0 4.828-3.928 8.757-8.757 8.757Z"
        fill={color}
      />
    </Svg>
  );
};

const MapPinIconSVG = React.memo(MapPinIconSVGMemo);

export {MapPinIconSVG};
