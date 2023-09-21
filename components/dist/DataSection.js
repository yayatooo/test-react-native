"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
function DataSection(_a) {
    var item = _a.item, onPressHandler = _a.onPressHandler;
    return (react_1["default"].createElement(react_native_1.TouchableOpacity, null,
        react_1["default"].createElement(react_native_1.View, { style: styles.todo },
            react_1["default"].createElement(react_native_1.Text, { style: { fontSize: 15 } }, item.text),
            react_1["default"].createElement(react_native_1.TouchableOpacity, { style: styles.button },
                react_1["default"].createElement(react_native_1.Button, { title: "Delete", color: "#ce0000", onPress: function () { return onPressHandler(item.key); } }),
                react_1["default"].createElement(react_native_1.Button, { title: "Edit" })))));
}
exports["default"] = DataSection;
var styles = react_native_1.StyleSheet.create({
    todo: {
        padding: 15,
        marginVertical: 10,
        backgroundColor: "#e4e4e4",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    button: {
        flexDirection: "row",
        gap: 6
    }
});
