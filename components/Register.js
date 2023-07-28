import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import HeaderButton from "./HeaderButton";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import GoogleLogo from "../assets/google.png";

const Register = () => {
  const [isSecure, setIsSecure] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
  };

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  const HorizontalLine = () => {
    return <View style={styles.horizontalLine} />;
  };

  const Icon = ({ name, color }) => (
    <Ionicons name={name} color={color} style={styles.icon} />
  );
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f6f8fa",
        flex: 1,
      }}
    >
      <View style={{ margin: 20, paddingTop: 30 }}>
        <HeaderButton />
        <View style={styles.content}>
          <Text style={styles.Title}>Register Account</Text>
          <Text style={styles.subTitle}>
            Fill your details or continue with {"\n"}social media
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.inputContainer}>
            <Icon
              name="ios-person"
              size={30}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="First name"
              placeholderTextColor="black"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon
              name="ios-person"
              size={30}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Last name"
              placeholderTextColor="black"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon name="mail" size={30} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              placeholderTextColor="black"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon
              name="lock-closed"
              size={30}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry={isSecure}
            />
            <TouchableOpacity onPress={toggleSecureEntry}>
              <Icon name="eye" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={handleCheckboxPress}
          >
            {isChecked ? (
              <MaterialIcons name="check-box" size={24} color="blue" />
            ) : (
              <MaterialIcons
                name="check-box-outline-blank"
                size={24}
                color="blue"
              />
            )}
            <Text style={styles.checkboxLabel}>
              I accept all the Terms & Conditions
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lineContainer}>
          <HorizontalLine />
          <Text style={styles.lineText}>Or sign in with</Text>
          <HorizontalLine />
        </View>

        <View style={styles.googleSign}>
          <Image source={GoogleLogo} style={styles.googleLogo} />
          <TouchableOpacity>
            <Text style={{ color: "#c2bcbc" }}>Sign Up with Google </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singIn}>
          <Text style={{ color: "#555555" }}>Already have account? </Text>
          <TouchableOpacity>
            <Text style={{ color: "#4425f5" }}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
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
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    height: 40,
    color: "black",
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
    marginLeft: 7,
  },
  inputsContainer: {
    gap: 7,
    marginTop: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#4425f5",
    width: "100%",
    height: 48,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
  horizontalLine: {
    borderBottomColor: "#c2bcbc",
    borderBottomWidth: 2,
    width: "30%",
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },
  lineText: {
    color: "#c2bcbc",
    fontWeight: "400",
    fontSize: 20,
  },
  googleSign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    marginTop: 45,
  },
  singIn: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
