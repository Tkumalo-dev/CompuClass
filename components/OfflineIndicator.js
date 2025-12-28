import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function OfflineIndicator({ isVisible }) {
  const { theme } = useTheme();

  if (!isVisible) return null;

  return (
    <View style={[styles.container, { backgroundColor: theme.warning }]}>
      <Ionicons name="cloud-offline" size={16} color="#fff" />
      <Text style={styles.text}>Working Offline</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    gap: 6,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});