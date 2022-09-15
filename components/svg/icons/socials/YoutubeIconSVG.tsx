import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export interface IYoutubeProps extends SvgProps {
  size?: number;
}

const YoutubeIconSVG: React.FC<IYoutubeProps> = ({size}) => {
  return (
    <Svg
      width={size ? size : 65}
      height={size ? size : 46}
      viewBox="0 0 65 46"
      fill="none">
      <Path
        d="M51.09 0H13.91C6.617 0 .704 5.913.704 13.208v18.586c0 7.295 5.913 13.208 13.208 13.208h37.18c7.294 0 13.207-5.913 13.207-13.208V13.208C64.298 5.913 58.385 0 51.09 0Zm-8.932 23.405L24.768 31.7a.698.698 0 0 1-.999-.63V13.963c0-.521.55-.858 1.014-.623l17.39 8.812a.698.698 0 0 1-.015 1.253Z"
        fill={'grey'}
      />
    </Svg>
  );
};

export {YoutubeIconSVG};
