import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function DayListItem({ days }) {
  return (
    <Link href={`days/day${days}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{days}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
  },
});
