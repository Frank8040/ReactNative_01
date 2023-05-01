import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { Overlay } from "react-native-elements/dist/overlay/Overlay";

const CustomAlert = ({ title, message, onConfirm, onCancel }) => {
  return (
    <Overlay
      overlayStyle={{
        borderRadius: 20,
        padding: 20,
        backgroundColor: "gray",
      }}
    >
      <>
        <Text
          style={{
            fontWeight: "bold",
            marginBottom: 10,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        <Text style={{ marginBottom: 10, fontSize: 15, textAlign: "center" }}>
          {message}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button
            title="Aceptar"
            onPress={onConfirm}
            buttonStyle={{
              backgroundColor: "green",
              borderRadius: 10,
              margin: 5,
              width: 100
            }}
          />
          <Button
            title="Cancelar"
            onPress={onCancel}
            buttonStyle={{
              backgroundColor: "red",
              borderRadius: 10,
              margin: 5,
              width: 100
            }}
          />
        </View>
      </>
    </Overlay>
  );
};

export default CustomAlert;
