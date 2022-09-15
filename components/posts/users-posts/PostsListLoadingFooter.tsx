import * as React from 'react';
import {FadeOut, ZoomIn} from 'react-native-reanimated';
import {AnimatedBox} from '../../../theme/Box';
import {JumpLoader} from '../../animations/JumpLoader';

const HEIGHT = 100;
export type IPostsListLoadingFooterProps = {
  isLoading: boolean;
};

const PostsListLoadingFooterMemo: React.FC<IPostsListLoadingFooterProps> = ({
  isLoading,
}) => {
  return isLoading ? (
    <AnimatedBox
      entering={ZoomIn}
      exiting={FadeOut}
      alignItems="center"
      width={'100%'}
      height={HEIGHT}
      justifyContent={'flex-start'}
      pointerEvents={'none'}
      flexDirection="column"
      padding="l">
      <JumpLoader />
    </AnimatedBox>
  ) : null;
};

const PostsListLoadingFooter = React.memo(PostsListLoadingFooterMemo);
export {PostsListLoadingFooter};
