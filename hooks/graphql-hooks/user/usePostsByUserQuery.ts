import * as React from 'react';
import {useQuery} from '@apollo/client';

import {POSTS_BY_USER} from '../../../graphql/queries/posts-queries';

function usePostsByUserQuery(userId: string, isOnScreen: boolean) {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
  const [total, setTotal] = React.useState(0);
  const [hasError, setHasError] = React.useState(false);
  const {fetchMore, data, loading, refetch, error} = useQuery(POSTS_BY_USER, {
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
      setHasError(false);
      if (
        response &&
        response.postsByUser &&
        response.postsByUser.paginatorInfo
      ) {
        setCurrentPage(response.postsByUser.paginatorInfo.currentPage);
        setTotal(response.postsByUser.paginatorInfo.total);
        setHasMore(response.postsByUser.paginatorInfo.hasMorePages);
      }
    },
    onError: (errorx: any) => {
      setHasError(true);
      if (errorx.networkError) {
        console.log(error);
      }
    },
  });

  const queryData = {
    posts: hasError || error ? [] : data?.postsByUser?.data,
    loading: loading && isOnScreen,
    total,
    hasMore,
    currentPage,
  };
  return {...queryData, refetch, fetchMore};
}

export default usePostsByUserQuery;
