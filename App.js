import { useState } from "react";
import { FlatList, StyleSheet, View, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);
  const [isModalVisible, setisModalVisible] = useState(false);

  const addGoalHandler = (enteredText) => {
    setcourseGoals((prevGoals) => {
      return [
        ...prevGoals,
        { id: Math.random().toString(), value: enteredText },
      ];
    });
  };

  const toggleModal = () => {
    setisModalVisible((prevValue) => !prevValue);
  };

  const deleteHandler = (id) => {
    setcourseGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <GoalInput
          onAddGoal={addGoalHandler}
          isVisible={isModalVisible}
          toggleModalOverlay={toggleModal}
        />
        <Button title="Add New Goal" onPress={toggleModal} color="#364fc7" />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.value}
                  onDelete={deleteHandler}
                  id={itemData.item.id}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
});
