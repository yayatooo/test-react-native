import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Alert,
  TextInput,
} from "react-native";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import { useState } from "react";
import DataSection from "./components/DataSection";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  const deleteHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
    console.log("di klik");
  };

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      const newTodo = { text, key: Math.random().toString() };
      return [newTodo, ...prevTodos];
    });
    setText("");
  };

  return (
    <View>
      <View>
        <Header />
      </View>
      <View>
        {/* <FormSection submitHandler={submitHandler} /> */}
        <View style={styles.containerForm}>
          <TextInput
            placeholder="Add your Schudle"
            style={styles.input}
            onChangeText={changeHandler}
            value={text}
          />
          <Button
            title="Add"
            color="#0077c7"
            onPress={() => submitHandler(text)}
          />
        </View>
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
