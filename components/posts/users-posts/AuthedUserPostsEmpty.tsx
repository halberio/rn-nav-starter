import * as React from 'react';
import {FadeIn, FadeOut} from 'react-native-reanimated';
import {AnimatedBox} from '../../../theme/Box';
import {SIZES} from '../../../theme/sizes';
import {PostItemsLoadingIndicator} from '../../animations/PostItemsLoadingIndicator';
import {PrimaryButton} from '../../buttons/PrimaryButton';

export type IPostListEmptyProps = {
  isLoading: boolean;
};

const AuthedUserPostsEmptyMemo: React.FC<IPostListEmptyProps> = ({
  isLoading,
}) => {
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
      <PrimaryButton
        type="light"
        onPress={() => console.log('')}
        text="Create a Post"
      />
    </AnimatedBox>
  );
};

const AuthedUserPostsEmpty = React.memo(AuthedUserPostsEmptyMemo);
export {AuthedUserPostsEmpty};
