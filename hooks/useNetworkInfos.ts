import React, {useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
function useNetworkInfos() {
  const [isConnected, setIsConnected] = React.useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state && state?.isConnected ? state.isConnected : false);
    });

    return unsubscribe();
  }, []);

  return {isConnected};
}

export default useNetworkInfos;
