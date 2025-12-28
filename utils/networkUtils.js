import NetInfo from '@react-native-community/netinfo';

export const networkUtils = {
  async checkConnectivity() {
    try {
      const state = await NetInfo.fetch();
      return state.isConnected && state.isInternetReachable;
    } catch (error) {
      console.warn('Network check failed:', error);
      return false;
    }
  },

  async testSupabaseConnection(supabaseUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      
      const response = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: 'HEAD',
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      return response.ok;
    } catch (error) {
      console.warn('Supabase connection test failed:', error);
      return false;
    }
  },

  isNetworkError(error) {
    const networkErrorMessages = [
      'Network request failed',
      'fetch',
      'timeout',
      'connection',
      'NETWORK_ERROR',
      'ERR_NETWORK'
    ];
    
    return networkErrorMessages.some(msg => 
      error.message?.toLowerCase().includes(msg.toLowerCase())
    );
  }
};