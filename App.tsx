import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import { useState } from "react";
import DataSection from "./components/DataSection";

export default function App() {
  const [todo, setTodo] = useState([
    { todo: "Coffe", key: 1 },
    { todo: "Bathroom", key: 2 },
    { todo: "Launch", key: 3 },
    { todo: "Work", key: 4 },
    { todo: "Sleep", key: 5 },
  ]);

  const deleteHandler = (key) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
    console.log("di klik");
  };

  return (
    <View>
      <View>
        <Header />
      </View>
      <View>
        <FormSection />
      </View>
      <View>
        <FlatList
          style={styles.dataTodo}
          data={todo}
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
