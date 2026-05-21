import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import { SendButtonIcon } from "../assets/SendButtonIcon";

const SendButton = () => {
  return (
    <TouchableOpacity style={styles.circle}>
      <SendButtonIcon />
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1077AF",
  },
});
