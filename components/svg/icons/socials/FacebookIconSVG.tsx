import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export interface IFacebookIconSVGProps extends SvgProps {
  size?: number;
  color?: string;
}

const FacebookIconSVG: React.FC<IFacebookIconSVGProps> = ({size, color}) => {
  return (
    <Svg
      width={size ? size : 25}
      viewBox="0 0 28 28"
      height={size ? size : 25}
      fill="none">
      <Path
        d="M28 14c0-7.732-6.268-14-14-14S0 6.268 0 14c0 6.988 5.12 12.78 11.812 13.83v-9.783H8.258V14h3.554v-3.084c0-3.51 2.091-5.447 5.289-5.447 1.531 0 3.133.273 3.133.273v3.445H18.47c-1.74 0-2.281 1.08-2.281 2.187V14h3.882l-.62 4.047h-3.262v9.783C22.88 26.78 28 20.988 28 14z"
        fill="#fff"
      />
      <Path
        d="M19.447 18.049l.62-4.048h-3.882v-2.626c0-1.107.542-2.186 2.281-2.186h1.765V5.743s-1.602-.273-3.133-.273c-3.198 0-5.289 1.938-5.289 5.447v3.084H8.255v4.048h3.554v9.783a14.14 14.14 0 004.376 0v-9.784h3.262z"
        fill={color ? color : 'rgba(0,0,0,0)'}
      />
    </Svg>
  );
};

export {FacebookIconSVG};
