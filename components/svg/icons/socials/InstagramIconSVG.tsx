import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';

export interface IInstagramIconProps extends SvgProps {
  size?: number;
}

const InstagramIconSVG: React.FC<IInstagramIconProps> = ({size}) => {
  return (
    <Svg
      width={size ? size : 47}
      height={size ? size : 47}
      viewBox="0 0 47 47"
      fill="none">
      <Path
        d="M33.009.034H14.026C6.31.034.034 6.311.034 14.026v18.983C.034 40.724 6.311 47 14.026 47h18.983C40.724 47 47 40.724 47 33.01V14.026C47 6.31 40.724.034 33.01.034Zm9.266 32.975a9.267 9.267 0 0 1-9.266 9.266H14.026a9.267 9.267 0 0 1-9.267-9.266V14.026a9.267 9.267 0 0 1 9.267-9.267h18.983a9.267 9.267 0 0 1 9.266 9.267v18.983Z"
        fill="url(#a)"
      />
      <Path
        d="M23.517 11.37c-6.698 0-12.147 5.45-12.147 12.147 0 6.698 5.45 12.147 12.147 12.147 6.698 0 12.147-5.449 12.147-12.147S30.215 11.37 23.517 11.37Zm0 19.57a7.422 7.422 0 1 1 0-14.845 7.422 7.422 0 0 1 0 14.845Z"
        fill="url(#b)"
      />
      <Path
        d="M35.688 14.372a2.91 2.91 0 1 0 0-5.821 2.91 2.91 0 0 0 0 5.821Z"
        fill="url(#c)"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={23.517}
          y1={46.863}
          x2={23.517}
          y2={0.399}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={'grey'} />
          <Stop offset={0.3} stopColor={'grey'} />
          <Stop offset={0.6} stopColor={'grey'} />
          <Stop offset={1} stopColor={'grey'} />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={23.517}
          y1={46.863}
          x2={23.517}
          y2={0.399}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={'grey'} />
          <Stop offset={0.3} stopColor={'grey'} />
          <Stop offset={0.6} stopColor={'grey'} />
          <Stop offset={1} stopColor={'grey'} />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={35.688}
          y1={46.863}
          x2={35.688}
          y2={0.399}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor={'grey'} />
          <Stop offset={0.3} stopColor={'grey'} />
          <Stop offset={0.6} stopColor={'grey'} />
          <Stop offset={1} stopColor={'grey'} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export {InstagramIconSVG};
