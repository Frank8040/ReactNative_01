import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

const Layout = ({ children }) => {
  return <View style={styles.container}>
    <StatusBar/>
    {children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
});

export default Layout;
