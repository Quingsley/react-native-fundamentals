import { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Text,
  Modal,
  Image,
} from "react-native";
const GoalInput = (props) => {
  const [enteredText, setenteredText] = useState("");
  const [errors, seterrors] = useState("");
  const inpuChangeHandler = (enteredText) => {
    seterrors("");
    setenteredText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredText.trim().length === 0) {
      seterrors("Please enter a valid course goal");
      return;
    }
    props.onAddGoal(enteredText);
    setenteredText("");
    props.toggleModalOverlay();
  };
  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <View style={{ width: "80%" }}>
          <TextInput
            placeholder="Add a course goal"
            style={styles.inputContainer.textInput}
            onChangeText={inpuChangeHandler}
            value={enteredText}
          />
          {errors ? <Text style={{ color: "red" }}>{errors}</Text> : null}
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainer.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} color="#74c0fc" />
          </View>
          <View style={styles.buttonContainer.button}>
            <Button
              title="CANCEL"
              onPress={props.toggleModalOverlay}
              color="#d6336c"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#1864ab",
    textInput: {
      borderColor: "#4dabf7",
      backgroundColor: "#74c0fc",
      color: "#112A46",
      borderWidth: 2,
      padding: 10,
      borderRadius: 5,
      padding: 16,
    },
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 14,
    button: {
      width: "30%",
      marginHorizontal: 8,
    },
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    resizeMode: "cover",
  },
});
