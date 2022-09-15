import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {palette} from '../../../theme/theme';

export interface ISupportIconProps extends SvgProps {
  size?: number;
  color?: string;
  isActive?: boolean;
}

const SupportIconSVGMemo: React.FC<ISupportIconProps> = ({size, color}) => {
  return (
    <Svg
      shouldRasterizeIOS
      renderToHardwareTextureAndroid
      width={size ? size : 62}
      height={size ? size : 60}
      viewBox="0 0 60 60"
      fill="none">
      <Path
        x={3}
        y={6}
        d="M10.944 23.56a2.43 2.43 0 0 0 3.37-.45 3 3 0 0 0 .33-2.09c-.16-.68-5.28-5.78-6-6a1.77 1.77 0 0 0-1.73.18 2.29 2.29 0 0 0-1.06 3.07 45.695 45.695 0 0 0 5.09 5.29ZM25.075 5.391l.64.36 2.07-2.07a27.585 27.585 0 0 0 2-2.13s-1.7-.35-3.69-.72-4-.72-4.43-.79c-.76-.08-.85-.06-.85.21.084.416.229.817.43 1.19a14.69 14.69 0 0 0 3.83 3.95ZM6.114 29.59a2.351 2.351 0 0 0 2.78-3.22 10.76 10.76 0 0 0-2.88-2.83 2.39 2.39 0 0 0-3.11 2.85 8.3 8.3 0 0 0 3.21 3.2ZM18.524 8.681c4.26 4.24 4.37 4.32 5.73 4.06a2.37 2.37 0 0 0 1.67-2.88c-.15-.53-.27-.66-1.2-1.07-2.79-1.27-5.85-4.35-6.76-6.81a2.13 2.13 0 0 0-.51-.88 2.45 2.45 0 0 0-3 .83 2.74 2.74 0 0 0-.09 2.34c.07.26 1.96 2.23 4.16 4.41ZM13.394 14.75c1.85 1.82 3.49 3.39 3.69 3.49.297.112.612.17.93.17a2.32 2.32 0 0 0 1.77-3.86 58.32 58.32 0 0 0-7-6.56 1.8 1.8 0 0 0-1.31 0 2.57 2.57 0 0 0-1.56 1.64c-.33 1.23-.12 1.53 3.48 5.12Z"
        fill={palette.interactionsIconsShadow}
      />
      <Path
        x={3}
        y={4}
        d="M10.944 23.56a2.43 2.43 0 0 0 3.37-.45 3 3 0 0 0 .33-2.09c-.16-.68-5.28-5.78-6-6a1.77 1.77 0 0 0-1.73.18 2.29 2.29 0 0 0-1.06 3.07 45.695 45.695 0 0 0 5.09 5.29ZM25.075 5.391l.64.36 2.07-2.07a27.585 27.585 0 0 0 2-2.13s-1.7-.35-3.69-.72-4-.72-4.43-.79c-.76-.08-.85-.06-.85.21.084.416.229.817.43 1.19a14.69 14.69 0 0 0 3.83 3.95ZM6.114 29.59a2.351 2.351 0 0 0 2.78-3.22 10.76 10.76 0 0 0-2.88-2.83 2.39 2.39 0 0 0-3.11 2.85 8.3 8.3 0 0 0 3.21 3.2ZM18.524 8.681c4.26 4.24 4.37 4.32 5.73 4.06a2.37 2.37 0 0 0 1.67-2.88c-.15-.53-.27-.66-1.2-1.07-2.79-1.27-5.85-4.35-6.76-6.81a2.13 2.13 0 0 0-.51-.88 2.45 2.45 0 0 0-3 .83 2.74 2.74 0 0 0-.09 2.34c.07.26 1.96 2.23 4.16 4.41ZM13.394 14.75c1.85 1.82 3.49 3.39 3.69 3.49.297.112.612.17.93.17a2.32 2.32 0 0 0 1.77-3.86 58.32 58.32 0 0 0-7-6.56 1.8 1.8 0 0 0-1.31 0 2.57 2.57 0 0 0-1.56 1.64c-.33 1.23-.12 1.53 3.48 5.12Z"
        fill={color ? color : '#F6F6F6'}
      />
      <Path
        x={3}
        y={6}
        d="M47.305 29.161c2-2.08 2.3-2.42 2.42-3a2.41 2.41 0 0 0-1.19-2.4c-1.22-.69-2-.41-3.75 1.22-1 1-1.1 1-1.76.94a1.469 1.469 0 0 1-1.39-1.58c0-.63.09-.75 1.74-2.44a19.643 19.643 0 0 0 1.93-2.13 2.91 2.91 0 0 0-.07-2.13 2.39 2.39 0 0 0-2.66-1.2 5.697 5.697 0 0 0-1.84 1.35c-1.22 1.17-1.38 1.27-2 1.27a1.54 1.54 0 0 1-1.32-2.41 20.2 20.2 0 0 1 1.62-1.68c2.19-2.1 2.64-3.11 2-4.4a2.75 2.75 0 0 0-2-1.28c-.75 0-1.28.3-2.56 1.52s-1.3 1.2-1.92 1.2a1.46 1.46 0 0 1-1.57-1.57c0-.71 0-.77 1.92-2.68 2.12-2.13 2.39-2.62 2.1-3.73a2.65 2.65 0 0 0-1.51-1.62c-1.21-.46-1.93 0-4.74 2.78l-2.3 2.3.37.87a5.67 5.67 0 0 1 0 4.32 5.58 5.58 0 0 1-4.21 3.27c-.88.13-1 .25-1 .89a5.52 5.52 0 0 1-4.68 4.76l-.84.1-.1.85a5.49 5.49 0 0 1-4.76 4.67c-.64 0-.77.16-.88 1a5.72 5.72 0 0 1-2.77 4 5.58 5.58 0 0 1-4.92.26l-.78-.34-2.63 2.55a3.77 3.77 0 0 0-1 4.17c.48 1 5.48 7 5.48 7s5 5.45 7.39 5.59a5 5 0 0 0 3.93-1.81c2.18-2.65 3.2-4.08 3.76-4.32 1.15-.51 2.76-.64 5.56-.46 4.18.27 5.12 0 7-1.78l11.89-11.72s-.16.03 2.04-2.2ZM51.455 34.861l-2.58-2.58-.77.67c-.301.276-.582.574-.84.89 0 0-10.34 10.17-11.88 11.7l-1.45 1.45 2.65 2.65s1.58 2.22 3.58 2.22 8-5.5 8-5.5 5-5 5.5-7.5-2.21-4-2.21-4Z"
        fill={palette.interactionsIconsShadow}
      />
      <Path
        x={3}
        y={4}
        d="M47.305 29.161c2-2.08 2.3-2.42 2.42-3a2.41 2.41 0 0 0-1.19-2.4c-1.22-.69-2-.41-3.75 1.22-1 1-1.1 1-1.76.94a1.469 1.469 0 0 1-1.39-1.58c0-.63.09-.75 1.74-2.44a19.643 19.643 0 0 0 1.93-2.13 2.91 2.91 0 0 0-.07-2.13 2.39 2.39 0 0 0-2.66-1.2 5.697 5.697 0 0 0-1.84 1.35c-1.22 1.17-1.38 1.27-2 1.27a1.54 1.54 0 0 1-1.32-2.41 20.2 20.2 0 0 1 1.62-1.68c2.19-2.1 2.64-3.11 2-4.4a2.75 2.75 0 0 0-2-1.28c-.75 0-1.28.3-2.56 1.52s-1.3 1.2-1.92 1.2a1.46 1.46 0 0 1-1.57-1.57c0-.71 0-.77 1.92-2.68 2.12-2.13 2.39-2.62 2.1-3.73a2.65 2.65 0 0 0-1.51-1.62c-1.21-.46-1.93 0-4.74 2.78l-2.3 2.3.37.87a5.67 5.67 0 0 1 0 4.32 5.58 5.58 0 0 1-4.21 3.27c-.88.13-1 .25-1 .89a5.52 5.52 0 0 1-4.68 4.76l-.84.1-.1.85a5.49 5.49 0 0 1-4.76 4.67c-.64 0-.77.16-.88 1a5.72 5.72 0 0 1-2.77 4 5.58 5.58 0 0 1-4.92.26l-.78-.34-2.63 2.55a3.77 3.77 0 0 0-1 4.17c.48 1 5.48 7 5.48 7s5 5.45 7.39 5.59a5 5 0 0 0 3.93-1.81c2.18-2.65 3.2-4.08 3.76-4.32 1.15-.51 2.76-.64 5.56-.46 4.18.27 5.12 0 7-1.78l11.89-11.72s-.16.03 2.04-2.2ZM51.455 34.861l-2.58-2.58-.77.67c-.301.276-.582.574-.84.89 0 0-10.34 10.17-11.88 11.7l-1.45 1.45 2.65 2.65s1.58 2.22 3.58 2.22 8-5.5 8-5.5 5-5 5.5-7.5-2.21-4-2.21-4Z"
        fill={color ? color : '#F6F6F6'}
      />
    </Svg>
  );
};

const SupportIconSVG = React.memo(SupportIconSVGMemo);
export {SupportIconSVG};
