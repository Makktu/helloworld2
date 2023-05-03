import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Button from "./Button";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.colors}>
        <Text style={styles.title}>It's Coming</Text>
        <Button style={styles.subs} item="Some new thing" />
        <Button item="Some time soon" />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d1b1b",
    alignItems: "center",
    justifyContent: "center",
    color: "orangered",
  },
  title: {
    fontSize: 50,
    color: "orangered",
  },
  subs: {
    fontSize: 40,
    color: "dodgerblue",
  },
  colors: {
    color: "orangered",
  },
});
