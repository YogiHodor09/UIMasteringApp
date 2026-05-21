import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AvatarLogo from "../assets/AvatarLogo";
import BackButton from "./BackButton";
import { s, vs } from "react-native-size-matters";
import SendButton from "./SendButton";
import SocialIcon from "./SocialIcon";
import SocialSection from "./SocialSection";
import { FontAwesome, FontAwesome5, AntDesign } from "@expo/vector-icons";
import XLogo from "../assets/XLogo";

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <AvatarLogo />
      </View>
      <Text style={styles.contactUsText}>Contact Us</Text>
      <View style={styles.socialContainer}>
        <Text style={styles.textSocialPlatform}>Social Media Platforms</Text>
        {/* React 'Props' --> title passed as an parameter and get the value */}
        <SocialSection
          icon={<FontAwesome name="whatsapp" size={24} color="#178AD9" />}
          title="WhatsApp"
        />
        <SocialSection icon={<XLogo />} title="X" />
        <SocialSection
          icon={<FontAwesome5 name="instagram" size={24} color="#178AD9" />}
          title="Instagram"
        />
        <SocialSection
          icon={<FontAwesome name="snapchat-ghost" size={24} color="#178AD9" />}
          title="Snap Chat"
        />
        <SocialSection
          icon={<FontAwesome5 name="tiktok" size={24} color="#178AD9" />}
          title="Tik Tok"
        />
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(50),
    paddingHorizontal: s(17), // horizontal padding
  },
  header: {
    flexDirection: "row", // row view
    justifyContent: "space-between", // space between header components
  },
  socialContainer: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(14),
    paddingHorizontal: s(18),
    paddingVertical: s(15),
    marginTop: vs(17),
  },
  textSocialPlatform: {
    color: "#000000",
    fontSize: s(16),
    fontWeight: 600,
  },
  contactUsText: {
    color: "#000000",
    fontWeight: 600,
    fontSize: s(30),
    marginTop: vs(20),
    marginStart: s(19),
  },
});
