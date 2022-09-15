import * as React from 'react';
import {FadeIn, FadeOut} from 'react-native-reanimated';
import {AnimatedBox} from '../../../theme/Box';
import {SIZES} from '../../../theme/sizes';
import TextRestyle from '../../../theme/TextRestyle';
import {PostItemsLoadingIndicator} from '../../animations/PostItemsLoadingIndicator';

export type IPostListEmptyProps = {
  isLoading: boolean;
};

const PostListEmptyMemo: React.FC<IPostListEmptyProps> = ({isLoading}) => {
  return isLoading ? (
    <PostItemsLoadingIndicator />
  ) : (
    <AnimatedBox
      entering={FadeIn}
      exiting={FadeOut}
      padding={'s'}
      minHeight={SIZES.screenHeight * 0.4}
      justifyContent="center"
      flex={1}>
      <TextRestyle opacity={0.5} textAlign={'center'} variant={'title_h2'}>
        No Posts yet
      </TextRestyle>
    </AnimatedBox>
  );
};

const PostListEmpty = React.memo(PostListEmptyMemo);
export {PostListEmpty};
