import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "#ddd" }}
      onPress={props.onDeleteGoal.bind(this, props.goal.item.id)}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.goal.item.text}</Text>
      </View>
    </Pressable>
  );
};

const GoalsList = ({ goals, onDeleteGoal }) => {
  return (
    <View style={styles.goalsListContainer}>
      <FlatList
        data={goals}
        alwaysBounceVertical={false}
        renderItem={(goal) => (
          <GoalItem goal={goal} onDeleteGoal={onDeleteGoal} />
        )}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalsListContainer: {
    marginTop: 24,
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingTop: 16,
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "#fff",
  },
});

export default GoalsList;
