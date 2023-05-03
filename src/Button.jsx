import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ item }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.subs}>{item}</Text>
    </TouchableOpacity>
  );
};

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
    fontSize: 20,
    color: "dodgerblue",
  },
  colors: {
    color: "orangered",
  },
});

export default Button;
