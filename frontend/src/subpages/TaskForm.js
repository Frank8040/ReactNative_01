import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getTask, saveTask, updateTask } from "../../api";

const TaskForm = ({ navigation, route }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (name, value) => {
    setTask({ ...task, [name]: value });
    setErrors({ ...errors, [name]: null });
  };
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [errors, setErrors] = useState({
    title: null,
    description: null,
  });

  const handleSubmit = async () => {
    let hasErrors = false;
    if (!task.description && !task.title) {
      setErrors({
        ...errors,
        description: "Description is required",
        title: "Title is required",
      });
      hasErrors = true;
    }
    if (!task.description) {
      setErrors({ ...errors, description: "Description is required" });
      hasErrors = true;
    }
    if (!task.title) {
      setErrors({ ...errors, title: "Title is required" });
      hasErrors = true;
    }
    if (!hasErrors) {
      try {
        if (!editing) {
          await saveTask(task);
          setIsButtonDisabled(true);
          Alert.alert("Se registró exitosamente!!!");
        } else {
          await updateTask(route.params.id, task);
          Alert.alert("Se actualizó exitosamente!!!");
        }
        navigation.navigate("tab");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({
        headerTitle: "Updating a Task",
      });
      setEditing(true);
      (async () => {
        const task = await getTask(route.params.id);
        setTask({ title: task.title, description: task.description });
      })();
    }
  }, []);

  return (
    <Layout>
      <TextInput
        style={styles.input}
        placeholder="Write a Title"
        placeholderTextColor="gray"
        onChangeText={(text) => handleChange("title", text)}
        value={task.title}
      />
      {errors.title && <Text style={styles.error}>{errors.title}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Write a Description"
        placeholderTextColor="gray"
        onChangeText={(text) => handleChange("description", text)}
        value={task.description}
      />
      {errors.description && 
        <Text style={styles.error}>{errors.description}</Text>
      }

      {!editing ? (
        <TouchableOpacity
          style={styles.buttonSave}
          disabled={isButtonDisabled}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Save Task</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.buttonUpdate}
          disabled={isButtonDisabled}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Update Task</Text>
        </TouchableOpacity>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "90%",
    height: 40,
    backgroundColor: "white",
    borderColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#10ac84",
    padding: 5,
    textAlign: "center",
    marginBottom: 10,
    color: "black",
  },
  buttonSave: {
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#10ac84",
    width: "50%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonUpdate: {
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#e58e26",
    width: "50%",
  },
});

export default TaskForm;
