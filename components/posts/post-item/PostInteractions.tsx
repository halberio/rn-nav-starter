import {useTheme} from '@shopify/restyle';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import Box from '../../../theme/Box';
import {SIZES} from '../../../theme/sizes';
import {Theme} from '../../../theme/theme';
import {CommentIconSVG} from '../../svg/interactions/CommentIconSVG';
import {DownVoteSVG} from '../../svg/interactions/DownVoteSVG';
import {ShareIconSVG} from '../../svg/interactions/ShareIconSVG';
import {SupportIconSVG} from '../../svg/interactions/SupportIconSvg';
import {TopUpIconSVG} from '../../svg/interactions/TopUpIconSVG';
import {PostIteractionButton} from './PostIteractionButton';

const ICON_SIZE = Math.round(SIZES.screenWidth * 0.105);
export type IPostInteractionsProps = {
  onUpVote: () => void;
  onDownVote: () => void;
  onSupport: () => void;
  onShare: () => void;
  onComment: () => void;
  up_votes_count: number;
  down_votes_count: number;
  supports_count: number;
  comments_count: number;
};

const PostInteractionsMemo: React.FC<IPostInteractionsProps> = ({
  onUpVote,
  onDownVote,
  onSupport,
  onShare,
  onComment,
  down_votes_count,
  supports_count,
  up_votes_count,
  comments_count,
}) => {
  const {colors} = useTheme<Theme>();
  const {user} = useSelector((state: RootState) => state.authReducer);
  return (
    <Box
      paddingRight="s"
      maxWidth={48}
      justifyContent="center"
      alignItems={'center'}>
      <PostIteractionButton
        counter={up_votes_count}
        onPress={onUpVote}
        icon={
          <TopUpIconSVG
            size={ICON_SIZE}
            color={colors.interactionsIconsColor}
          />
        }
      />

      <Box height={10} />
      {user && !user?.is_visitor ? (
        <>
          <PostIteractionButton
            counter={supports_count}
            onPress={onSupport}
            icon={
              <SupportIconSVG
                size={ICON_SIZE * 0.9}
                color={colors.interactionsIconsColor}
              />
            }
          />
          <Box height={10} />
        </>
      ) : null}

      <PostIteractionButton
        counter={down_votes_count}
        onPress={onDownVote}
        icon={
          <DownVoteSVG size={ICON_SIZE} color={colors.interactionsIconsColor} />
        }
      />
      <Box height={10} />
      <PostIteractionButton
        counter={comments_count}
        onPress={onComment}
        icon={
          <CommentIconSVG
            size={ICON_SIZE * 0.675}
            color={colors.interactionsIconsColor}
          />
        }
      />
      <Box height={10} />
      <PostIteractionButton
        counter={0}
        onPress={onShare}
        icon={
          <ShareIconSVG
            size={ICON_SIZE * 0.7}
            color={colors.interactionsIconsColor}
          />
        }
      />
    </Box>
  );
};
function arePropsEquals(
  prevProps: IPostInteractionsProps,
  nextProps: IPostInteractionsProps,
) {
  return (
    prevProps.comments_count === nextProps.comments_count &&
    prevProps.down_votes_count === nextProps.down_votes_count &&
    prevProps.up_votes_count === nextProps.up_votes_count &&
    prevProps.supports_count === nextProps.supports_count
  );
}
const PostInteractions = React.memo(PostInteractionsMemo, arePropsEquals);
export {PostInteractions};
