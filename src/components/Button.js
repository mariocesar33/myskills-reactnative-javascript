import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function Button({onPress}) {
  return (
    <TouchableOpacity 
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    alignItems: "center",

    backgroundColor: "#a370f7",
    padding: 15,
    borderRadius: 7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
