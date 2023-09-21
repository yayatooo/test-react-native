import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function FormSection() {
  return (
    <View style={styles.containerForm}>
      <TextInput placeholder="Add your Schudle" style={styles.input} />
      <Button title="Add" color="#0077c7" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    flexDirection: "row",
    backgroundColor: "#e7e7e7f",
    marginTop: "5%",
    marginHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  butonStyle: {
    width: "30%",
  },
  input: {
    width: "100%",
    padding: 5,
    backgroundColor: "#e4e4e4",
  },
});
