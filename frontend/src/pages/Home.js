import React from "react";
import TaskList from "../components/TaskList";
import Layout from "../components/Layout";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  return (
    <Layout>
      <TouchableOpacity onPress={() => navigation.navigate("TaskForm")}>
        <View style={{ alignItems: "flex-end", position: "relative", margin: 10 }}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.button}
          >
            <Text style={styles.new}>New</Text>
          </LinearGradient>
        </View>
      </TouchableOpacity>
      <TaskList />
    </Layout>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  new: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});

export default Home;
