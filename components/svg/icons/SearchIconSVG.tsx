import React from 'react';
import Svg, {Path} from 'react-native-svg';

export type ISearchIconProps = {
  color?: string;
  size?: number;
};

const SearchIconMemo: React.FC<ISearchIconProps> = ({
  size,
  color = '#F6F6F6',
}) => {
  return (
    <Svg
      width={size ? size : 19}
      height={size ? size : 19}
      viewBox="0 0 19 19"
      fill="none">
      <Path
        stroke={color}
        strokeWidth={0.5}
        d="M17.47 18.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM15.25 8.5a6.75 6.75 0 0 1-6.75 6.75v1.5a8.25 8.25 0 0 0 8.25-8.25h-1.5ZM8.5 15.25A6.75 6.75 0 0 1 1.75 8.5H.25a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM1.75 8.5A6.75 6.75 0 0 1 8.5 1.75V.25A8.25 8.25 0 0 0 .25 8.5h1.5ZM8.5 1.75a6.75 6.75 0 0 1 6.75 6.75h1.5A8.25 8.25 0 0 0 8.5.25v1.5Zm10.03 15.72-4.187-4.188-1.06 1.06 4.187 4.188 1.06-1.06Z"
        fill={color}
      />
    </Svg>
  );
};

const SearchIconSVG = React.memo(SearchIconMemo);
export {SearchIconSVG};
