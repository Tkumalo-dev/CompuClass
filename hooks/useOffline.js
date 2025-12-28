import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

export const useOffline = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [connectionType, setConnectionType] = useState('unknown');

  useEffect(() => {
    // Check initial state
    NetInfo.fetch().then(state => {
      setIsOnline(state.isConnected && state.isInternetReachable);
      setConnectionType(state.type);
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      const online = state.isConnected && state.isInternetReachable;
      setIsOnline(online);
      setConnectionType(state.type);
      
      if (online) {
        console.log('✅ Network connected:', state.type);
      } else {
        console.log('❌ Network disconnected');
      }
    });

    return () => unsubscribe();
  }, []);

  return { isOnline, connectionType };
};