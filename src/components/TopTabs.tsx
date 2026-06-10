import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const tabsArr = ["LIVE", "RECORDED"];
const ACTIVE_BG = "#75563B";
const ACTIVE_TXT = "#FFFFFF";
const INACTIVE_TXT = "#2C2016";

const TopTabs = () => {
  const [activeTab, inActiveTab] = useState("LIVE");
  return (
    <View style={styles.container}>
      {tabsArr.map((tabName) => {
        return (
          <TouchableOpacity
            style={[
              styles.tabButton,
              // styling tab color with the active color bg using condition
              activeTab === tabName && { backgroundColor: ACTIVE_BG },
            ]}
          >
            <Text
              style={
                // giving the text style on active text from initial state - useState("LIVE/RECORDED")
                activeTab === tabName ? styles.activeText : styles.inActiveText
              }
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    height: vs(40),
    flexDirection: "row",
    alignItems: "center",
    padding: s(4),
  },
  tabButton: {
    height: vs(32),
    borderRadius: s(8),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeText: {
    fontSize: s(14),
    fontWeight: 600,
    color: "#FFFFFF",
  },
  inActiveText: {
    fontSize: s(14),
    fontWeight: 400,
    color: "#2C2016",
  },
});
