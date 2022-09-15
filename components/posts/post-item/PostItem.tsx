import * as React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Box from '../../../theme/Box';
import {SIZES} from '../../../theme/sizes';
import {palette} from '../../../theme/theme';
import {IUserType} from '../../../types/users/userType';
import {PostHeader} from './PostHeader';
import {PostInteractions} from './PostInteractions';
import {VideoPlayer} from './VideoPlayer';
const {width} = Dimensions.get('screen');
const HEIGHT = SIZES.screenHeight;
const WIDTH = width;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    overflow: 'hidden',
    borderBottomColor: palette.primaryBlack,
    borderBottomWidth: 1,
    backgroundColor: palette.primaryBlack,
  },
  interactionsContainer: {
    bottom: '100%',
  },
  media: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: SIZES.screenWidth,
  },
});

export type IPostItemProps = {
  onUpVote: () => void;
  onDownVote: () => void;
  onSupport: () => void;
  onShare: () => void;
  onEdit: () => void;
  onComment: () => void;
  isSupportedPost: boolean;
  isAnonymousPost: boolean;
  height: number;
  paddingBottom: number;
  thumbnail_url: string;
  description?: string;
  video_url: string;
  location?: string;
  isPlaying: boolean;
  isVisible: boolean;
  isUserAnonymous: boolean;
  isSupporterAnonymous: boolean;
  up_votes_count: number;
  down_votes_count: number;
  supports_count: number;
  owner: IUserType;
  supporter?: IUserType;
  comments_count: number;
};

const PostItemMemo: React.FC<IPostItemProps> = ({
  onUpVote,
  onDownVote,
  onShare,
  onSupport,
  onEdit,
  onComment,
  thumbnail_url,
  height = HEIGHT,
  paddingBottom = 100,
  description,
  isPlaying,
  video_url,
  location,
  owner,
  supporter,
  isSupportedPost,
  isVisible,
  isUserAnonymous,
  isAnonymousPost,
  isSupporterAnonymous,
  up_votes_count,
  down_votes_count,
  supports_count,
  comments_count,
}) => {
  if (!thumbnail_url || !video_url) {
    return null;
  }
  return (
    <Box
      position={'relative'}
      style={[
        styles.container,
        {
          height,
        },
      ]}
      backgroundColor="black">
      {true && (
        <VideoPlayer
          {...{video_url, thumbnail_url}}
          shouldPlay={isPlaying}
          isVisible={isVisible}
        />
      )}

      <Box
        position={'absolute'}
        bottom={0}
        width={'100%'}
        minHeight={paddingBottom}>
        <Box
          position={'absolute'}
          right={0}
          style={styles.interactionsContainer}>
          <PostInteractions
            comments_count={comments_count}
            down_votes_count={down_votes_count}
            supports_count={supports_count}
            up_votes_count={up_votes_count}
            {...{onUpVote, onDownVote, onSupport, onShare, onComment}}
          />
        </Box>

        <PostHeader
          isSupporterAnonymous={isSupporterAnonymous}
          isUserAnonymous={isUserAnonymous}
          isAnonymousPost={isAnonymousPost}
          ownerId={owner?.id}
          supporterId={isSupportedPost ? supporter?.id : undefined}
          avatarUri={owner?.avatar}
          username={`${owner?.username}`}
          location={location}
          description={description}
          supporterAvatar={supporter?.avatar}
          isSupportedPost={isSupportedPost}
          onEdit={onEdit}
        />
      </Box>
    </Box>
  );
};

function arePropsEquals(prevProps: IPostItemProps, nextProps: IPostItemProps) {
  return (
    prevProps.isPlaying === nextProps.isPlaying &&
    prevProps.isVisible === nextProps.isVisible &&
    prevProps.isSupportedPost === nextProps.isSupportedPost &&
    prevProps.paddingBottom === nextProps.paddingBottom &&
    prevProps.thumbnail_url === nextProps.thumbnail_url &&
    prevProps.video_url === nextProps.video_url &&
    prevProps.description === nextProps.description &&
    prevProps.height === nextProps.height &&
    prevProps.location === nextProps.location &&
    prevProps.isAnonymousPost === nextProps.isAnonymousPost &&
    prevProps.isUserAnonymous === nextProps.isUserAnonymous &&
    prevProps.isSupporterAnonymous === nextProps.isSupporterAnonymous &&
    prevProps.up_votes_count === nextProps.up_votes_count &&
    prevProps.down_votes_count === nextProps.down_votes_count &&
    prevProps.supports_count === nextProps.supports_count &&
    prevProps.comments_count === nextProps.comments_count &&
    JSON.stringify(prevProps.owner) === JSON.stringify(nextProps.owner) &&
    JSON.stringify(prevProps.supporter) === JSON.stringify(nextProps.supporter)
  );
}

const PostItem = React.memo(PostItemMemo, arePropsEquals);
export {PostItem};
