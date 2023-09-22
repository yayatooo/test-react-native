"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
function FormSection(_a) {
    // const [text, setText] = useState("");
    var submitHandler = _a.submitHandler, text = _a.text, setText = _a.setText, changeHandler = _a.changeHandler;
    // const changeHandler = (value) => {
    //   setText(value);
    // };
    return (react_1["default"].createElement(react_native_1.View, { style: styles.containerForm },
        react_1["default"].createElement(react_native_1.TextInput, { placeholder: "Add your Schudle", style: styles.input, onChangeText: changeHandler, value: setText }),
        react_1["default"].createElement(react_native_1.Button, { title: "Add", color: "#0077c7", onPress: function () { return submitHandler(text); } })));
}
exports["default"] = FormSection;
var styles = react_native_1.StyleSheet.create({
    containerForm: {
        flexDirection: "row",
        backgroundColor: "#e7e7e7f",
        marginTop: "5%",
        marginHorizontal: 50,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    butonStyle: {
        width: "30%"
    },
    input: {
        width: "100%",
        padding: 5,
        backgroundColor: "#e4e4e4"
    }
});
