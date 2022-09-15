import * as React from 'react';
import {useQuery} from '@apollo/client';
import {ME, meQueryName} from '../../../graphql/queries/auth-queries';

function useMeQuery() {
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const {data, loading, refetch} = useQuery(ME, {
    initialFetchPolicy: 'cache-and-network',
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-and-network',
    refetchWritePolicy: 'overwrite',
    notifyOnNetworkStatusChange: true,
    returnPartialData: false,

    onCompleted: _dataUser => {
      setIsRefreshing(false);
    },
    onError: errorComing => {
      setIsRefreshing(false);
      if (errorComing.networkError) {
        console.log('error', errorComing.networkError);
      }
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
      data: data && data[meQueryName],
      loading,
      isRefreshing,
    }),
    [data, loading, isRefreshing],
  );
  return {...queryData, onRefresh, refetch};
}

export default useMeQuery;
