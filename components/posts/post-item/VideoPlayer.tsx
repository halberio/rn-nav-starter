import * as React from 'react';
import {ResizeMode, Video} from 'expo-av';
import Animated, {
  FadeIn,
  FadeOut,
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Platform, StyleSheet} from 'react-native';
import {SIZES} from '../../../theme/sizes';
import Box from '../../../theme/Box';
import FastImage from 'react-native-fast-image';
import {palette} from '../../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import AndroidVideo from 'react-native-video';
import {useEventCallback} from '../../../hooks/useEventCallback';

const AnimatedVideo = Animated.createAnimatedComponent(Video);

const PROGRESS_BAR_WIDTH = 2;

const styles = StyleSheet.create({
  media: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    width: SIZES.screenWidth,
  },
  video: {
    ...StyleSheet.absoluteFillObject,
    width: SIZES.screenWidth,
    backgroundColor: 'rgba(0,0,0,0)',
  },

  progressBar: {
    width: PROGRESS_BAR_WIDTH,
    backgroundColor: palette.offWhite,
    height: '0%',
    opacity: 0.8,
  },
});

export type IVideoPlayerProps = {
  shouldPlay: boolean;
  video_url: string;
  thumbnail_url: string;
  isVisible: boolean;
};

const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  shouldPlay,
  video_url,
  thumbnail_url,
  isVisible,
}) => {
  const videoRef = React.useRef<Video>(null);
  const videoAndroidRef = React.useRef<AndroidVideo>(null);
  const navigation = useNavigation();
  const progress = useSharedValue(0);

  React.useEffect((): any => {
    let isCancelled = false;
    if (!isCancelled && Platform.OS === 'ios') {
      try {
        videoRef &&
          videoRef.current &&
          videoRef.current?.getStatusAsync().then((status: any) => {
            if (status && !status.isPlaying && shouldPlay && isVisible) {
              videoRef && videoRef.current && videoRef.current?.playAsync();
            } else if (isVisible && !shouldPlay) {
              videoRef && videoRef.current && videoRef.current?.playAsync();
              videoRef && videoRef.current && videoRef.current?.pauseAsync();
            } else {
              if (!isVisible) {
                videoRef && videoRef.current && videoRef.current?.stopAsync();
              }
            }
          });
      } catch (error) {}
    }

    return () => (isCancelled = true);
  }, [isVisible, shouldPlay]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      setTimeout(() => {
        videoRef && videoRef.current && videoRef.current?.stopAsync();
      }, 150);
    });
    return unsubscribe;
  }, [navigation]);

  const onPlaybackStatusUpdate = useEventCallback((event: any) => {
    if (
      !shouldPlay ||
      !event ||
      !event.durationMillis ||
      !isVisible ||
      Platform.OS !== 'ios'
    ) {
      return;
    }
    try {
      const percentage = (event.positionMillis / event.durationMillis) * 100;

      progress.value = percentage > 1 ? withTiming(percentage) : percentage;
    } catch (error) {}
  }, []);

  const onProgressAndroid = useEventCallback(
    ({currentTime, playableDuration}) => {
      if (
        !shouldPlay ||
        !currentTime ||
        !isVisible ||
        Platform.OS !== 'android'
      ) {
        return;
      }
      try {
        const percentage = (currentTime / playableDuration) * 100;

        progress.value = percentage > 1 ? withTiming(percentage) : percentage;
      } catch (error) {}
    },
    [],
  );
  const animatedProgressStyle = useAnimatedStyle(() => {
    return {
      height: `${progress.value}%`,
    };
  });

  return (
    <Box
      pointerEvents="none"
      accessible={false}
      style={{...StyleSheet.absoluteFillObject}}>
      <FastImage
        source={{
          uri: thumbnail_url,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.cacheOnly,
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.media}
      />

      {Platform.OS === 'android' ? (
        <AndroidVideo
          ref={videoAndroidRef}
          style={styles.video}
          allowsExternalPlayback={false}
          volume={isVisible ? 1 : 0}
          automaticallyWaitsToMinimizeStalling={false}
          progressUpdateInterval={300}
          onProgress={onProgressAndroid}
          useTextureView={false}
          //@ts-ignore
          useSecureView={true}
          poster={thumbnail_url}
          posterResizeMode="cover"
          hideShutterView
          headers={{
            Range: 'bytes=0-567139',
          }}
          preventsDisplaySleepDuringVideoPlayback={false}
          repeat={isVisible && shouldPlay}
          resizeMode="cover"
          trackId={video_url}
          source={{
            uri: video_url,
          }}
          paused={!shouldPlay}
        />
      ) : isVisible ? (
        <AnimatedVideo
          ref={videoRef}
          layout={Layout.withInitialValues({
            opacity: 0,
          })}
          nativeID={video_url}
          volume={isVisible ? 1 : 0}
          entering={FadeIn}
          onPlaybackStatusUpdate={onPlaybackStatusUpdate}
          exiting={FadeOut}
          style={styles.video}
          source={{
            uri: video_url,
            localUri: video_url,
            headers: {
              Range: 'bytes=0-567139',
            },
          }}
          isMuted={!isVisible || !shouldPlay}
          useNativeControls={false}
          removeClippedSubviews
          progressUpdateIntervalMillis={200}
          usePoster
          shouldRasterizeIOS
          posterSource={{uri: thumbnail_url}}
          resizeMode={ResizeMode.COVER}
          posterStyle={styles.media}
          isLooping={shouldPlay && isVisible}
        />
      ) : null}
      {isVisible && shouldPlay ? (
        <Box
          justifyContent={'flex-end'}
          position={'absolute'}
          left={0}
          height="100%"
          width={4}>
          <Animated.View style={[styles.progressBar, animatedProgressStyle]} />
        </Box>
      ) : null}
    </Box>
  );
};

export {VideoPlayer};
