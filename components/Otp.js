import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeaderButton from "./HeaderButton";
const Otp = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#f6f8fa", flex: 1 }}>
      <View style={{ margin: 20 }}>
        <View style={{ paddingTop: 35 }}>
          <HeaderButton />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Enter Your OTP</Text>
          <Text style={styles.subtitle}>
            We have just sent you 4 digit code via your email example@gmail.com
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.otpInput}
            placeholder=""
            placeholderTextColor={"#c2bcbc"}
          />
          <TextInput
            style={styles.otpInput}
            placeholder=""
            placeholderTextColor={"#c2bcbc"}
          />
          <TextInput
            style={styles.otpInput}
            placeholder=""
            placeholderTextColor={"#c2bcbc"}
          />
          <TextInput
            style={styles.otpInput}
            placeholder=""
            placeholderTextColor={"#c2bcbc"}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>

        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Didn’t receive code? </Text>
          <TouchableOpacity>
            <Text style={{ color: "#4425f5" }}>Resend Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 50,
    alignItems: "center",
    gap: 25,
  },
  title: {
    fontWeight: "600",
    color: "#2b2b2b",
    fontSize: 25,
  },
  subtitle: {
    color: "#717171",
    textAlign: "center",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
  otpInput: {
    backgroundColor: "#ffffff",
    marginHorizontal: 10,
    width: 52,
    height: 52,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#4425f5",
    width: "100%",
    height: 48,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  bottomText: {
    color: "#616161",
  },
});
