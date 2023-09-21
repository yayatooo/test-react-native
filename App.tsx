import { StyleSheet, Text, View, Button, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import { useState } from "react";
import DataSection from "./components/DataSection";

// type TodoProps : {
//   todo: string,
//   key: number
// }

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const deleteHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
    console.log("di klik");
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [{ text, key: Math.random().toString() }, ...prevTodos];
    });
  };
  return (
    <View>
      <View>
        <Header />
      </View>
      <View>
        <FormSection submitHandler={submitHandler} />
      </View>
      <View>
        <FlatList
          style={styles.dataTodo}
          data={todos}
          renderItem={({ item }) => (
            <DataSection item={item} onPressHandler={deleteHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },

  textDot: {
    color: "#0044ff",
    fontWeight: "700",
  },
  dataTodo: {
    backgroundColor: "#ffff",
    margin: 20,
  },
  todo: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#e4e4e4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonAction: {
    flexDirection: "row",
    gap: 10,
  },
  textStyle: {
    fontSize: 15,
  },
});
