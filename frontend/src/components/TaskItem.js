import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import CustomAlert from "./Alert";

const TaskItem = ({ task, handleDelete }) => {
  const navigation = useNavigation();

  const [isVisible, setIsVisible] = useState(false);

  const onConfirm = () => {
    handleDelete(task.id);
    setIsVisible(false);
    console.log("Accept");
  };

  const onCancel = () => {
    setIsVisible(false);
    navigation.navigate("tab");
    console.log("Cancel");
  };
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => navigation.navigate("TaskForm", { id: task.id })}
      >
        <View
          style={{ flexDirection: "column", width: "30%", paddingRight: 10 }}
        >
          <View>
            <Text style={styles.itemTitle}>Nombre</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>{task.title}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "column", width: 190 }}>
          <View>
            <Text style={styles.itemTitle}>Descripción</Text>
          </View>
          <View>
            <Text style={styles.itemTitle}>{task.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: "column" }}>
        <View>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Text style={styles.deleditcontainer}>
              <Icon name="trash-2" style={styles.deleteIcon} />
            </Text>
          </TouchableOpacity>
          {isVisible && (
            <CustomAlert
              title={<Icon name="alert-triangle" style={styles.alertIcon} />}
              message="¿Estás seguro de eliminar?"
              onConfirm={onConfirm}
              onCancel={onCancel}
            />
          )}
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("TaskForm", { id: task.id })}
          >
            <Text style={styles.deleditcontainer}>
              <Icon name="edit" style={styles.editIcon} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#333333",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 20,
    position: "relative",
  },
  itemTitle: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  deleditcontainer: {
    backgroundColor: "#ffff",
    borderRadius: 5,
    marginVertical: 5,
    padding: 5,
  },
  deleteIcon: {
    color: "#FF0000",
    fontSize: 20,
  },
  editIcon: {
    color: "green",
    fontSize: 20,
  },
  alertIcon: {
    fontSize: 30,
    color: "red",
  },
});
export default TaskItem;
