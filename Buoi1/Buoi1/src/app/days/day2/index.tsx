import { Pressable, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import{Stack, Link} from 'expo-router'

export default function index() {
  return (
    <View>
      <Stack.Screen options={{title:"Day 2"}}/>
      <Link href="/day2/onboarding" asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({})