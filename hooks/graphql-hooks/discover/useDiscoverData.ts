import * as React from 'react';
import {useQuery} from '@apollo/client';
import {DISCOVER} from '../../../graphql/queries/discover-queries';
import useNetworkInfos from '../../useNetworkInfos';

function useDiscoverData() {
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const {isConnected} = useNetworkInfos();
  const {loading, data, refetch} = useQuery(DISCOVER, {
    initialFetchPolicy: !isConnected ? 'cache-first' : 'cache-and-network',
    fetchPolicy: !isConnected ? 'cache-first' : 'cache-and-network',
    refetchWritePolicy: 'overwrite',
    nextFetchPolicy: !isConnected ? 'cache-first' : 'cache-and-network',
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      setIsRefreshing(false);
    },
    onError: error => {
      setIsRefreshing(false);
      console.log(error.graphQLErrors);
      if (error.networkError) {
        console.log(error);
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

  const queryData = React.useMemo(() => {
    return {
      topUsers: data?.discover?.popularReporters?.users?.length
        ? data?.discover?.popularReporters?.users.filter(
            (user: any) =>
              user && user.avatar !== undefined && user.avatar !== null,
          )
        : [],
      topPosts: data?.discover?.topReports?.posts
        ? data?.discover?.topReports?.posts
        : [],
      postsMayInterestsYou: data?.discover?.postsMayInterestsYou?.posts
        ? data?.discover?.postsMayInterestsYou?.posts
        : [],
      loading,
      isRefreshing,
    };
  }, [
    data?.discover?.popularReporters,
    data?.discover?.postsMayInterestsYou,
    data?.discover?.topReports,
    isRefreshing,
    loading,
  ]);
  return {...queryData, refetch, onRefresh};
}

export default useDiscoverData;
