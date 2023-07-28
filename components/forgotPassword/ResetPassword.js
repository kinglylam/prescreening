import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HeaderButton from "../HeaderButton";
import { Ionicons } from "@expo/vector-icons";

const ResetPassword = () => {
  const [isSecure, setIsSecure] = useState(true);
  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  const Icon = ({ name, color }) => (
    <Ionicons name={name} color={color} style={styles.icon} />
  );
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
          <Text style={styles.Title}>Reset Password</Text>
          <Text style={styles.subTitle}>
            Enter your naw password . Remember {"\n"}this time!
          </Text>
        </View>

        <View style={styles.inputsContainer}>
          <Text>New password</Text>
          <View style={styles.inputContainer}>
            <Icon
              name="lock-closed"
              size={30}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="password"
              placeholderTextColor="black"
              secureTextEntry={isSecure}
            />
            <TouchableOpacity onPress={toggleSecureEntry}>
              <Icon name="eye" />
            </TouchableOpacity>
          </View>
          <Text>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <Icon
              name="lock-closed"
              size={30}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="password"
              placeholderTextColor="black"
              secureTextEntry={isSecure}
            />
            <TouchableOpacity onPress={toggleSecureEntry}>
              <Icon name="eye" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;

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
});
