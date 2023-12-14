import { FlatList, StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import DayListItem from "@components/core/DayListItem";

const days = [...Array(24)].map((val, index) => index + 1);
export default function HomeScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        numColumns={2}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => <DayListItem days={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
  },
  box: {
    backgroundColor: "F9EDE3",
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    gap: 10,
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
    fontFamily: 'Inter'
  },
});
