import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function index() {
  return (
    <View>
        <Stack.Screen options={{title:'Day 1'}}/>
      <Text>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({})