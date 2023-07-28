import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Background from "../assets/Onboarding7.jpg";
import Logo from "../assets/Logo2.png";

const Onboarding8 = () => {
  return (
    <ImageBackground source={Background} style={styles.BackgroundImage}>
      <View style={styles.darkOverlay} />
      <View style={styles.content}>
        <Image style={styles.logo} source={Logo} />
        <View>
          <Text style={styles.text1}>
            Prescriptions Plus..... {"\n"}Your One-Stop Shop {"\n"}For
            Medicines, {"\n"}Equipment and More
          </Text>
          <Text style={styles.text2}>With Hospyta</Text>

          <View style={{ marginTop: 40 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#4425f5",
                width: "100%",
                height: 48,
                padding: 10,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                height: 48,
                padding: 10,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "white",
                marginTop: 20,
              }}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Onboarding8;

const styles = StyleSheet.create({
  BackgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    marginTop: 55,
    marginLeft: 18,
    marginRight: 18,
  },
  text1: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: 32,
    marginTop: 295,
  },
  text2: {
    color: "#e32654",
    fontWeight: "400",
    fontSize: 17,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
  darkOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    opacity: 0.5,
  },
});
