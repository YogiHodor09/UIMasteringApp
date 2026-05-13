import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FoodLogo from "../assets/FoodLogo";
import SunLogo from "../assets/SunLogo";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <FoodLogo /> // Difference is there between PNG, SVG image noted
      <SunLogo style={styles.sunImage} />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sunImage: {
    position: "absolute", // Positioning the exact place inside the screen using botton/right option
    bottom: 0,
    right: 0,
  },
});
