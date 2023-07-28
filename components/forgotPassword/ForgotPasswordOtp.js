import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeaderButton from "../HeaderButton";

const ForgotPasswordOtp = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: 30,
        backgroundColor: "#f6f8fa",
        flex: 1,
      }}
    >
      <View style={{ margin: 20 }}>
        <View style={styles.headerContainer}>
          <HeaderButton />
          <Text style={styles.headerText}>Need Help?</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.Title}>Enter Your OTP</Text>
          <Text style={styles.subTitle}>
            We have just sent you 4 digit code via {"\n"}your email
            example@gmail.com
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
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
        </View>
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

export default ForgotPasswordOtp;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
  },
  headerText: {
    fontWeight: "400",
    fontSize: 15,
    color: "#4425f5",
    textDecorationLine: "underline",
  },
  content: {
    marginTop: 50,
  },
  Title: {
    textAlign: "center",
    fontWeight: "600",
    marginBottom: 20,
    fontSize: 36,
    color: "#000000",
  },
  subTitle: {
    textAlign: "center",
    color: "#717171",
    fontWeight: "400",
    fontSize: 15,
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
    marginTop: 20,
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
