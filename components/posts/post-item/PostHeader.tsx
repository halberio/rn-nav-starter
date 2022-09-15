import * as React from 'react';
import Box from '../../../theme/Box';
import TextRestyle from '../../../theme/TextRestyle';
import {AvatarPost} from '../../avatars/AvatarPost';
import {LinearGradient} from 'expo-linear-gradient';
import {StyleSheet} from 'react-native';
import {MapPinIconSVG} from '../../svg/icons/MapPinIconSVG';
import {palette} from '../../../theme/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {EditDotsIconSVG} from '../../svg/icons/EditDotsIconSVG';
import PostDescriptionText from './PostDescriptionText';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../../../theme/sizes';

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
  },
  shadowText: {
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0.25,
  },
});

export type IPostHeaderProps = {
  username: string;
  avatarUri: string | undefined;
  description: string | undefined;
  location: string | undefined;
  supporterAvatar?: string;
  isSupportedPost: boolean;
  ownerId?: string;
  supporterId?: string;
  isAnonymousPost: boolean;
  isUserAnonymous: boolean;
  isSupporterAnonymous: boolean;
  onEdit: () => void;
};

const PostHeaderMemo: React.FC<IPostHeaderProps> = ({
  avatarUri,
  username,
  description,
  location,
  supporterAvatar,
  isSupportedPost,
  ownerId,
  supporterId,
  isAnonymousPost,
  isUserAnonymous,
  isSupporterAnonymous,
  onEdit,
}) => {
  const navigation = useNavigation<any>();
  const mentionHashtagPress = React.useCallback(() => {
    navigation && navigation.navigate('HashtagProfile');
  }, [navigation]);
  return (
    <Box padding={'sm'} style={styles.container}>
      <LinearGradient
        pointerEvents="none"
        style={{
          ...StyleSheet.absoluteFillObject,
        }}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)']}
      />
      <Box
        flexDirection={'row'}
        justifyContent="space-between"
        alignItems="center">
        <Box flexDirection={'row'} alignItems="center">
          <AvatarPost
            isSupporterAnonymous={isSupporterAnonymous}
            isUserAnonymous={isUserAnonymous}
            ownerId={ownerId}
            ownerUsername={username}
            supporterId={supporterId}
            isSupportedPost={isSupportedPost}
            uri={avatarUri}
            supporterAvatarUri={supporterAvatar}
            isAnonymousPost={isAnonymousPost}
          />
          <Box>
            {username && !isAnonymousPost && (
              <TextRestyle
                style={[
                  styles.shadowText,
                  {
                    maxWidth: SIZES.screenWidth * 0.6,
                  },
                ]}
                numberOfLines={1}
                marginLeft={isSupportedPost ? 'm' : 's'}
                variant="postUserName">
                @{username}
              </TextRestyle>
            )}
            {isAnonymousPost && (
              <TextRestyle
                style={[
                  styles.shadowText,
                  {
                    maxWidth: SIZES.screenWidth * 0.6,
                  },
                ]}
                numberOfLines={1}
                marginLeft={isSupportedPost ? 'm' : 's'}
                variant="postUserName">
                @Anonymous
              </TextRestyle>
            )}
            {location && !isAnonymousPost && (
              <Box
                opacity={0.9}
                marginLeft={isSupportedPost ? 'm' : 's'}
                flexDirection={'row'}
                alignItems="center">
                <MapPinIconSVG size={13} color={palette.lightSilver} />
                <TextRestyle
                  numberOfLines={1}
                  style={[
                    styles.shadowText,
                    {
                      maxWidth: SIZES.screenWidth * 0.5,
                    },
                  ]}
                  marginLeft={'xxs'}
                  variant="subPostUserName">
                  {location}
                </TextRestyle>
              </Box>
            )}
          </Box>
        </Box>
        <TouchableOpacity onPress={onEdit}>
          <Box padding={'s'} alignItems="center" justifyContent={'center'}>
            <EditDotsIconSVG color={palette.offWhite} />
          </Box>
        </TouchableOpacity>
      </Box>
      {description && (
        <PostDescriptionText mentionHashtagPress={mentionHashtagPress}>
          {description}
        </PostDescriptionText>
      )}
    </Box>
  );
};

function arePropsEquals(
  prevProps: IPostHeaderProps,
  nextProps: IPostHeaderProps,
) {
  return (
    prevProps.username === nextProps.username &&
    prevProps.avatarUri === nextProps.avatarUri &&
    prevProps.description === nextProps.description &&
    prevProps.location === nextProps.location &&
    prevProps.supporterAvatar === nextProps.supporterAvatar &&
    prevProps.ownerId === nextProps.ownerId &&
    prevProps.supporterId === nextProps.supporterId &&
    prevProps.isAnonymousPost === nextProps.isAnonymousPost &&
    prevProps.isSupportedPost === nextProps.isSupportedPost &&
    prevProps.isUserAnonymous === nextProps.isUserAnonymous &&
    prevProps.isSupporterAnonymous === nextProps.isSupporterAnonymous
  );
}

const PostHeader = React.memo(PostHeaderMemo, arePropsEquals);
export {PostHeader};
