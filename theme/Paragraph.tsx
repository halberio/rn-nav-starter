import React, {PropsWithChildren} from 'react';
import {createText} from '@shopify/restyle';
import {Theme} from './theme';

const Text = createText<Theme>();

export interface IParagraphProps extends PropsWithChildren {}

const Paragraph: React.FC<IParagraphProps> = ({children}) => {
  return <Text variant={'paragraph'}>{children}</Text>;
};

export default Paragraph;
