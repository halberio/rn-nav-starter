import * as React from 'react';
import {useQuery} from '@apollo/client';
import {POSTS} from '../../../graphql/queries/posts-queries';
import useNetworkInfos from '../../useNetworkInfos';
import {IPostType} from '../../../types/posts/postType';
import {Asset} from 'expo-asset';
import convertToProxyURL from 'react-native-video-cache';
import FastImage from 'react-native-fast-image';

function usePostsQuery() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const {isConnected} = useNetworkInfos();
  const [videos, setVideos] = React.useState<string[]>([]);
  const [isPreloading, setIsPreloading] = React.useState(false);
  const {data, loading, fetchMore, refetch, previousData} = useQuery(POSTS, {
    initialFetchPolicy: !isConnected ? 'cache-first' : 'cache-and-network',
    fetchPolicy: !isConnected ? 'cache-first' : 'cache-and-network',
    refetchWritePolicy: 'overwrite',
    nextFetchPolicy: !isConnected ? 'cache-first' : 'cache-and-network',
    notifyOnNetworkStatusChange: true,
    partialRefetch: true,
    returnPartialData: true,
    errorPolicy: 'ignore',
    onCompleted: dataPosts => {
      if (
        dataPosts &&
        dataPosts?.posts?.paginatorInfo &&
        dataPosts.posts?.paginatorInfo.total
      ) {
        setTotal(dataPosts?.posts?.paginatorInfo?.total);
        setCurrentPage(dataPosts?.posts?.paginatorInfo?.currentPage);
      }
    },
    onError: e => {
      console.log(e.graphQLErrors);
    },
  });

  const posts = React.useMemo(
    () => data?.posts?.data || previousData?.posts?.data || [],
    [data?.posts?.data, previousData?.posts?.data],
  );

  React.useEffect((): any => {
    let isCancelled = false;
    if (!isCancelled) {
      if (posts !== undefined && !loading) {
        setIsPreloading(true);
        (async () => {
          const promisesUrls = posts.map((post: IPostType) => {
            const mediaItem =
              post && post.is_support
                ? post.original &&
                  post.original.medias &&
                  post.original.medias[0] &&
                  post.original.medias[0].mediable
                : post &&
                  post.medias &&
                  post.medias[0] &&
                  post.medias[0].mediable;

            return new Promise(async (resolve, reject) => {
              try {
                const urlVid = await convertToProxyURL(mediaItem.url);
                const isDownloaded = Asset.fromURI(urlVid).downloaded;
                const asset = !isDownloaded
                  ? await Asset.fromURI(urlVid).downloadAsync()
                  : Asset.fromURI(urlVid);

                const url = asset.localUri || asset.uri;

                //avatar
                try {
                  const avatar =
                    post && post.is_support
                      ? post.original?.user?.avatar
                      : post && post.user && post.user?.avatar;
                  if (avatar) {
                    FastImage.preload([
                      {
                        uri: avatar,
                        priority: FastImage.priority.high,
                      },
                    ]);
                  }
                } catch (erroravat) {}

                FastImage.preload([
                  {
                    uri: mediaItem.thumbnail_url,
                    priority: FastImage.priority.high,
                    cache: FastImage.cacheControl.cacheOnly,
                  },
                ]);
                if (url) {
                  resolve(url);
                } else {
                  if (urlVid) {
                    resolve(urlVid);
                  } else {
                    reject(mediaItem.url);
                  }
                }
              } catch (error) {
                reject(mediaItem.url);
              }
            });
          });
          if (promisesUrls && promisesUrls.length > 0) {
            const cachedVideosUrls: any[] = await Promise.all(promisesUrls);
            setVideos(cachedVideosUrls);
          }
          setIsPreloading(false);
        })();
      }
    }
    return () => (isCancelled = true);
  }, [loading, posts]);

  const queryData = React.useMemo(() => {
    return {
      posts,
      loading,
      currentPage,
      total,
      isPreloading,
      videos,
    };
  }, [currentPage, isPreloading, loading, posts, total, videos]);
  return {...queryData, refetch, fetchMore};
}

export default usePostsQuery;
