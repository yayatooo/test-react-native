import React from "react";
import { View, Text, TextInput } from "react-native";
import { useState } from "react";

export default function MathSplit() {
  const [text, setText] = useState("");

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ fontSize: 42, padding: 10 }}>
        {text
          .split(" ")
          .map((word) => word && "👍")
          .join(" ")}
      </Text>
    </View>
  );
}
