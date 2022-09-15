import * as React from 'react';
import {useQuery} from '@apollo/client';
import {GET_COMMENTS_BY_COMMENTABLE} from '../../../graphql/queries/comments-queries';

export default function useCommentsByPostId(
  id: string | null,
  model: string | null,
  isVisible: boolean,
) {
  const [currentPage, setCurrentPage] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [hasMorePages, setHasMorePages] = React.useState(true);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const {data, fetchMore, loading, refetch} = useQuery(
    GET_COMMENTS_BY_COMMENTABLE,
    {
      errorPolicy: 'all',
      notifyOnNetworkStatusChange: true,
      canonizeResults: true,
      partialRefetch: true,
      refetchWritePolicy: 'overwrite',
      skip: !id || !model || !isVisible,
      variables: {
        commentable_type: model,
        commentable_id: id,
      },
      onError: e => {
        console.log(e);
      },
      onCompleted: response => {
        if (
          response &&
          response.getCommentsByCommentable &&
          response.getCommentsByCommentable.paginatorInfo
        ) {
          setCurrentPage(
            response.getCommentsByCommentable.paginatorInfo.currentPage,
          );
          setTotal(response.getCommentsByCommentable.paginatorInfo.total);
          setHasMorePages(
            response.getCommentsByCommentable.paginatorInfo.hasMorePages,
          );
        }
      },
    },
  );

  const onRefresh = React.useCallback(() => {
    if (loading) {
      return;
    } else {
      setIsRefreshing(true);
      setTimeout(() => {
        refetch && refetch();
      }, 1000);
    }
  }, [loading, refetch]);

  const queryData = React.useMemo(
    () => ({
      comments: data?.getCommentsByCommentable?.data
        ? data.getCommentsByCommentable.data
        : [],
    }),
    [data?.getCommentsByCommentable?.data],
  );
  return {
    ...queryData,
    hasMorePages,
    loading,
    currentPage,
    total,
    fetchMore,
    isRefreshing,
    onRefresh,
    refetch,
  };
}
