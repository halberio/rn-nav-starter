import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export type ISendMsgIconSVGProps = {
  color?: string;
  size?: number;
};

const SendMsgIconSVGMemo: React.FC<ISendMsgIconSVGProps> = ({
  color = '#F6F6F6',
  size = 20,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 20" fill="none">
      <Path
        x={-1}
        d="M12.22 19.63c-1.18 0-2.85-.83-4.17-4.8l-.72-2.16-2.16-.72C1.21 10.63.38 8.96.38 7.78c0-1.17.83-2.85 4.79-4.18L13.66.77c2.12-.71 3.89-.5 4.98.58 1.09 1.08 1.3 2.86.59 4.98l-2.83 8.49c-1.33 3.98-3 4.81-4.18 4.81ZM5.64 5.03c-2.78.93-3.77 2.03-3.77 2.75 0 .72.99 1.82 3.77 2.74l2.52.84c.22.07.4.25.47.47l.84 2.52c.92 2.78 2.03 3.77 2.75 3.77.72 0 1.82-.99 2.75-3.77l2.83-8.49c.51-1.54.42-2.8-.23-3.45-.65-.65-1.91-.73-3.44-.22L5.64 5.03Z"
        fill={color}
      />
      <Path
        x={-1}
        d="M8.11 12.4c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.58-3.59c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.58 3.59c-.14.15-.34.22-.53.22Z"
        fill={color}
      />
    </Svg>
  );
};

const SendMsgIconSVG = React.memo(SendMsgIconSVGMemo);
export {SendMsgIconSVG};
