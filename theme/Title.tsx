import React, {PropsWithChildren} from 'react';
import {createText} from '@shopify/restyle';
import {Theme} from './theme';

const Text = createText<Theme>();

export interface ITitleProps extends PropsWithChildren {}

const Title: React.FC<ITitleProps> = ({children}) => {
  return <Text variant={'title'}>{children}</Text>;
};

export default Title;
