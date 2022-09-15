import * as React from 'react';
import {useQuery} from '@apollo/client';
import {
  userByIdQueryName,
  USER_BY_ID,
} from '../../../graphql/queries/users-queries';
import useNetworkInfos from '../../useNetworkInfos';

function useUserQuery(userId: string) {
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const {isConnected} = useNetworkInfos();
  const {data, loading, refetch} = useQuery(USER_BY_ID, {
    initialFetchPolicy: !isConnected ? 'cache-first' : 'cache-and-network',
    refetchWritePolicy: 'merge',
    notifyOnNetworkStatusChange: true,
    returnPartialData: false,
    partialRefetch: false,

    skip: !userId || userId.length === 0 || userId === undefined,
    variables: {
      id: userId.toString(),
    },

    onCompleted: () => {
      setIsRefreshing(false);
      try {
      } catch (errorCatched) {
        setIsRefreshing(false);
        console.log(errorCatched);
      }
    },
    onError: errorX => {
      console.log(errorX);
    },
  });

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
      user: data && data[userByIdQueryName],
      loading,
      isRefreshing,
    }),
    [data, isRefreshing, loading],
  );
  return {...queryData, refetch, onRefresh};
}

export default useUserQuery;
