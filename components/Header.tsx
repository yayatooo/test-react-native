import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    backgroundColor: "#0077c7",
    marginTop: 25,
  },
  headerText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "800",
    color: "#ffff",
  },
});
