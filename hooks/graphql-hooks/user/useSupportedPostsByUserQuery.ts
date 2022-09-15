import * as React from 'react';
import {useQuery} from '@apollo/client';

import {SUPPORTED_POSTS_BY_USER} from '../../../graphql/queries/posts-queries';

function useSupportedPostsByUserQuery(userId: string, isOnScreen: boolean) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
  const [total, setTotal] = React.useState(0);
  const {fetchMore, data, loading, refetch} = useQuery(
    SUPPORTED_POSTS_BY_USER,
    {
      initialFetchPolicy: 'cache-and-network',
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-and-network',
      refetchWritePolicy: 'overwrite',
      notifyOnNetworkStatusChange: true,
      errorPolicy: 'all',
      variables: {
        user_id: userId?.toString(),
      },
      skip: !userId || !isOnScreen,
      onCompleted: response => {
        if (
          response &&
          response.supportedPostsByUser &&
          response.supportedPostsByUser.paginatorInfo
        ) {
          setCurrentPage(
            response.supportedPostsByUser.paginatorInfo.currentPage,
          );
          setTotal(response.supportedPostsByUser.paginatorInfo.total);
          setHasMore(response.supportedPostsByUser.paginatorInfo.hasMorePages);
        }
      },
      onError: error => {
        console.log(error);
        if (error.networkError) {
          console.log(error);
        }
      },
    },
  );

  const queryData = React.useMemo(
    () => ({
      posts: data?.supportedPostsByUser?.data,
      loading: loading && isOnScreen,
      total,
      hasMore,
      currentPage,
    }),
    [
      currentPage,
      data?.supportedPostsByUser?.data,
      hasMore,
      isOnScreen,
      loading,
      total,
    ],
  );
  return {...queryData, refetch, fetchMore};
}

export default useSupportedPostsByUserQuery;
