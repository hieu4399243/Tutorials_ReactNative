
import { Stack } from 'expo-router'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function _layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: 'DEVember' }} />
    </Stack>
  </GestureHandlerRootView>
  )
}
