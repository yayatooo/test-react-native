import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Button } from "react-native";

export default function DataSection({ item, onPressHandler }) {
  return (
    <TouchableOpacity>
      <View style={styles.todo}>
        <Text style={{ fontSize: 15 }}>{item.text}</Text>
        <TouchableOpacity style={styles.button}>
          <Button
            title="Delete"
            color="#ce0000"
            onPress={() => onPressHandler(item.key)}
          />
          {/* <Button title="Edit" /> */}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todo: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#e4e4e4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    gap: 6,
  },
});
