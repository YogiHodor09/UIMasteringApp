import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SendButton from "./SendButton";
import { s, vs } from "react-native-size-matters";

// Getting Props from parent screen and bind in child screen we need a typescript interface approach
interface SocialSection {
  icon: React.ReactNode;
  title: String;
}

//   Adding props as title for the social section eg:WhatsApp --> ({icon, title})
const SocialSection: React.FC<SocialSection> = ({ icon, title }) => {
  return (
    <View style={styles.container}>
      {/* <SocialIcon /> */}
      <View style={styles.circle}>{icon}</View>
      {/* Adding props here from the social section passed from parent component */}
      <Text style={styles.text}>{title}</Text>
      <SendButton />
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6E8",
    paddingVertical: vs(15),
  },
  text: {
    flex: 1,
    marginStart: s(14),
    fontSize: s(12),
    color: "#8083A3",
  },
  circle: {
    height: s(46),
    width: s(46),
    borderRadius: s(23),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: s(1),
    borderColor: "#E4E6E8",
  },
});
