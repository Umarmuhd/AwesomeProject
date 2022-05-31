import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [goal, setGoal] = useState("");

  function goalInputHandler(event) {
    setGoal(event);
  }

  function addGoalHandler() {
    onAddGoal(goal);
    setGoal("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal"
        onChangeText={goalInputHandler}
        value={goal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  textInput: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
