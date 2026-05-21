import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";
import AvatarLogo from "../assets/AvatarLogo";

const UserAvatar = () => {
  return (
    <View>
      <AvatarLogo style={styles.avatar} />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    height: s(32),
    width: s(32),
    borderRadius: s(16),
  },
});
