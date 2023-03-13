import { StyleSheet, View, Text, Pressable } from "react-native";
const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={props.onDelete.bind(this, props.id)}
        android_ripple={{ color: "#bac8ff" }}
        style={({ pressed }) => pressed && styles.goalItem.pressedItem}
      >
        <Text style={styles.goalItem.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    backgroundColor: "#1971c2",
    borderRadius: 5,
    width: "100%",
    pressedItem: {
      opacity: 0.5,
    },
    goalItemText: {
      padding: 10,
      color: "#f8f9fa",
      fontSize: 18,
      textTransform: "uppercase",
    },
  },
});
