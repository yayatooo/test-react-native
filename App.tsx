import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

interface NameProps {
  name: string;
}

const CatName = (props: NameProps) => {
  const [catAction, setCatAction] = useState(true);

  return (
    <View>
      <Text>
        Hello My Name is {props.name} and i'm is {catAction ? "Hungry" : "full"}
      </Text>
      <Button
        onPress={() => {
          setCatAction(false);
        }}
        disabled={!catAction}
        title={catAction ? "give some milk" : "thank you"}
      />
    </View>
  );
};

export default function App() {
  const fullName = "Rahmat Hidayat";

  return (
    <View style={styles.container}>
      <Text style={styles.textDot}>Hello {fullName}</Text>
      <CatName name="Nyangko" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

  textDot: {
    color: "#0044ff",
    fontWeight: "700",
  },
});
