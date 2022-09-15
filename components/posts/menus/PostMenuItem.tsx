import {useTheme} from '@shopify/restyle';
import * as React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Box from '../../../theme/Box';
import TextRestyle from '../../../theme/TextRestyle';
import {Theme} from '../../../theme/theme';
import {ArrowRightIconSVG} from '../../svg/icons/ArrowRightIconSVG';

export type IPostMenuItemMemoProps = {
  textLeft: string;
  textRight?: string;
  onPress: () => void;
};

const PostMenuItemMemo: React.FC<IPostMenuItemMemoProps> = ({
  textRight,
  textLeft,
  onPress,
}) => {
  const {colors} = useTheme<Theme>();
  return (
    <TouchableOpacity delayPressIn={20} accessible={false} onPress={onPress}>
      <Box
        alignItems="center"
        justifyContent={'space-between'}
        flexDirection="row"
        paddingVertical={'s'}>
        <TextRestyle
          fontSize={16}
          variant={'title_h2'}
          fontWeight={'500'}
          accessible={false}>
          {textLeft}
        </TextRestyle>
        <Box
          flexDirection={'row'}
          justifyContent="center"
          alignItems={'center'}>
          {
            <TextRestyle
              marginRight={'s'}
              opacity={0.8}
              fontSize={14}
              variant={'paragraph'}
              accessible={false}>
              {textRight && textRight}
            </TextRestyle>
          }
          <Box opacity={0.8}>
            <ArrowRightIconSVG color={colors.textParagraph} size={12} />
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

const PostMenuItem = React.memo(PostMenuItemMemo);
export {PostMenuItem};
